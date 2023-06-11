import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { loginActions } from "../../reduxStore/login-slice";
import {
	regexEmail,
	regexPassword,
	regexPhone,
} from "../../utilities/extraFunctions";
import styles from "./signUp.module.css";
import axios from "axios";
function SignUp({ toggleForm }) {
	const [userName, setUserName] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [userCPassword, setUserCPassword] = useState("");
	const [userAddress, setUserAddress] = useState("");
	const [userPhone, setUserPhone] = useState();
	const [isPasswordValidated, setIsPasswordValidated] = useState(null);
	const [isEmailValidated, setIsEmailValidated] = useState(null);
	const [isPhoneValidated, setIsPhoneValidated] = useState(null);
	const [matchPswrd, setMatchPswrd] = useState(false);
	const typeOfUser = useSelector((state) => state.login.userType);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	let payload = {};
	//useEffect, pswrd & cpswrd validation required
	useEffect(() => {
		console.log(typeOfUser);
		setIsPasswordValidated(regexPassword.test(userPassword));
		setIsEmailValidated(regexEmail.test(userEmail));
		setIsPhoneValidated(regexPhone.test(userPhone));
		if (userPassword === userCPassword) {
			// error message
			setMatchPswrd(true);
			console.log("both passwords are same");
		}
	}, [userEmail, userPassword, userCPassword, userPhone]);

	function goToLogin() {
		toggleForm();
	}
	const savingUser = async () => {
		const response = await axios.post(
			"http://localhost:8080/save-user",
			payload
		);
		console.log(response);
	};
	function handleForm(event) {
		event.preventDefault();
		console.log(userEmail, userPassword, userCPassword, userPhone);
		if (
			isEmailValidated &&
			isPasswordValidated &&
			isPhoneValidated &&
			matchPswrd
		) {
			// check with database and through proper error
			// go to home

			console.log("all values are validated", typeOfUser);
			dispatch(loginActions.login());
			payload = {
				name: userName,
				email: userEmail,
				password: userPassword,
				address: userAddress,
				phone: userPhone,
				typeofuser: typeOfUser,
			};
			savingUser();
			navigate("/user");
		}
	}
	return (
		<div className={styles.container}>
			<form className={styles.formdiv}>
				<h1 className={styles.h1div}>Register</h1>
				<Input
					type="text"
					name="username"
					content="Name"
					value={userName}
					onChange={(e) => setUserName(e)}
				/>
				<Input
					type="text"
					name="email"
					content="Email"
					value={userEmail}
					onChange={(e) => setUserEmail(e)}
				/>
				<Input
					type="password"
					name="pswrd"
					content="Password"
					onChange={(e) => {
						setUserPassword(e);
					}}
				/>
				<p style={{ fontSize: "18px", color: "red" }}>
					Minimum 8characters, with atleast One Capital and special letter
				</p>
				<Input
					type="cpassword"
					name="cpswrd"
					content="Confirm Password"
					onChange={(e) => {
						setUserCPassword(e);
					}}
				/>
				<Input
					type="text"
					name="address"
					content="Address"
					value={userAddress}
					onChange={(e) => {
						setUserAddress(e);
					}}
				/>
				<Input
					type="number"
					name="phone"
					content="Phone Number"
					onChange={(e) => {
						setUserPhone(e);
					}}
				/>
				<button
					type="submit"
					className={styles.submitbutton}
					onClick={handleForm}
				>
					Submit
				</button>
				<button type="button" onClick={goToLogin}>
					Already have one? Login
				</button>
			</form>
		</div>
	);
}

export default SignUp;
