import { Link } from "react-router-dom";
import styles from "./cartAmount.module.css";
function CartAmount() {
	return (
		<div className={styles.cartpricecontainer}>
			<h1>Summary</h1>
			<div className={styles.subtotalcontainer}>
				<span>No of items:</span>
				<span>Qty: {5}</span>
			</div>
			<div className={styles.subtotalcontainer}>
				<span>Sub-total:</span>
				<span>${20}</span>
			</div>
			<div className={styles.subtotalcontainer}>
				<span>Tax:</span>
				<span>${5}</span>
			</div>

			<div className={styles.shippingcontainer}>
				<span>
					Estimated Delivery & Handling:<span>Free</span>
				</span>
			</div>
			<div className={styles.total}>
				<span className={styles.totalcontainer}>Total: </span>
				<span>${20}</span>
			</div>

			<Link onClick={() => {}} to="/checkout">
				Place Order
			</Link>
		</div>
	);
}

export default CartAmount;
