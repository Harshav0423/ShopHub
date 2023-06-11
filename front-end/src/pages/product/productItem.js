import { useDispatch } from "react-redux";
import Card from "../../UI/Card"
import classes from "./productItem.module.css";
// import { cartActions } from "../../store/cart-slice";
const ProductItem = (props) => {
	const { title, price, description, id } = props;
	const dispatch = useDispatch();

	const addToCartHandler = () => {
		// dispatch(
		// 	cartActions.addItemToCart({
		// 		id,
		// 		title,
		// 		price,
		// 		description,
		// 	})
		// );
	};
	return (
		<li className={classes.item}>
			<Card className={classes.carddiv}>
				<header>
					<h3>{title}</h3>
					<div className={classes.price}>${price.toFixed(2)}</div>
				</header>
				<p>{description}</p>
				<div className={classes.actions}>
					<button className={classes.cartbtn} onClick={addToCartHandler}>Add to Cart</button>
				</div>
			</Card>
		</li>
	);
};

export default ProductItem;