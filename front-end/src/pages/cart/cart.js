import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartAmount from "./cartAmount/cartAmount";
import CartListing from "./CartListing/cartListing";
import styles from './cart.module.css'
const Cart = () => {
	// const cartItems = useSelector(state=>state.cart.items)
	const navigate = useNavigate();
	return (true ? (
		<div>
			<h1 className={styles.pageheading}>Cart</h1>
			<div className={styles.cartcontainer}>
				<CartListing />
				<div>
					<CartAmount />
				</div>
			</div>
		</div>
	) : (
		<div className="noitemscontainer">
			<h2 className="pageheading">Cart is Empty!</h2>
			<button className="explorebtn" onClick={() => navigate("/")}>
				Explore
			</button>
		</div>
	));
};

export default Cart;
