import React from "react";
import styles from "./popup.module.css";

function Popup({ children, closeFunction, title }) {
	return (
		<div className={styles.popupcontainer}>
			<div className={styles.popupcontent}>
				<h2>{title}</h2>
				{children}
				<button onClick={closeFunction}>Close Popup</button>
			</div>
		</div>
	);
}

export default Popup;
