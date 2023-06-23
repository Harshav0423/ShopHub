import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/popup/popup";
import { errorActions } from "../../reduxStore/error-slice";
import Login from "../login/login";
import SignUp from "../register/signUp";
import styles from "./initial.module.css";
import UserSelection from "./userSelection/userSelection";

const InitialPage = () => {
	const [displayLogin, setDisplayLogin] = useState(true);
	const showError = useSelector((state) => state.error.isError);
	const showErrorMessage = useSelector((state) => state.error.message);
	const dispatch = useDispatch();

	const goToLoginForm = (e) => {
		setDisplayLogin(true);
		console.log(displayLogin, "from login");
	};
	const goToSignUpForm = () => {
		setDisplayLogin(false);
		console.log(displayLogin, "from signup");
	};
	function toClearError() {
		dispatch(errorActions.deactivateError());
	}
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<UserSelection />
			</div>
			{showError && (
				<Popup title="error" closeFunction={toClearError}>
					<div>{showErrorMessage}</div>
				</Popup>
			)}
			<div className={styles.right}>
				{displayLogin ? (
					<Login toggleForm={goToSignUpForm} />
				) : (
					<SignUp toggleForm={goToLoginForm} />
				)}
			</div>
		</div>
	);
};

export default InitialPage;
