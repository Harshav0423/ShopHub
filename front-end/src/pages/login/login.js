import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/input";
import { regexEmail, regexPassword } from "../../utilities/extraFunctions";
import { loginActions } from "../../reduxStore/login-slice";
import styles from "./login.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Login({ toggleForm }) {
	const [userEmail, setUserEmail] = useState("");
	const [userPassword, setUserPassword] = useState("");
	const [isPasswordValidated, setIsPasswordValidated] = useState();
	const [isEmailValidated, setIsEmailValidated] = useState();
	const typeOfUser = useSelector((state) => state.login.userType);

	const dispatch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		setIsPasswordValidated(regexPassword.test(userPassword));
		setIsEmailValidated(regexEmail.test(userEmail));
		if (isEmailValidated && isPasswordValidated) {
			// go to home
			// dispatch(loginActions.login());
			console.log("Login success");
		}
	}, [userPassword, userEmail]);

	function goToSignup() {
		toggleForm();
	}
	function handleForm(event) {
		event.preventDefault();
		console.log(userEmail, userPassword);
		if (isEmailValidated && isPasswordValidated) {
			dispatch(loginActions.login());
			if (typeOfUser === "user") {
				navigate("/user");
			} else if (typeOfUser === "seller") {
				navigate("/seller");
			}
		}
	}
	return (
		<div className={styles.container}>
			<form className={styles.formdiv}>
				<h1 className={styles.h1div}>Login</h1>
				<Input
					type="text"
					name="email"
					content="Email"
					value={userEmail}
					onChange={setUserEmail}
				/>
				<Input
					type="password"
					name="pswrd"
					content="Password"
					value={userPassword}
					onChange={setUserPassword}
				/>
				<button
					type="submit"
					className={styles.submitbutton}
					onClick={handleForm}
				>
					Submit
				</button>
				<button type="button" onClick={goToSignup}>
					New? Create one here
				</button>
			</form>
		</div>
	);
}

export default Login;
