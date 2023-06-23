import CartItem from "../CartItem/CartItem";
import styles from "./cartListing.module.css";
function CartListing({prods}) {
	// const prods = {};
	return (
		<div className={styles.productscontainer}>
			{/* {prods?.map((product) => {
				<CartItem product={product} />
			})} */}
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
		</div>
	);
}
export default CartListing;
