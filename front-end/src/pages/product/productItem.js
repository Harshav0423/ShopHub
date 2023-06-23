import { useDispatch } from "react-redux";
import styles from "./productItem.module.css";
// import { cartActions } from "../../store/cart-slice";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
const ProductItem = (props) => {
	const { id, title, description, price, img, category_name } = props.product;
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
		<Tilt
			key={id}
			tiltMaxAngleX={5}
			tiltMaxAngleY={5}
			glareEnable={false}
			transitionSpeed={2000}
			scale={1.02}
		>
			<div className={styles.productcard} key={id}>
				<Link to={`/product-details/${1}`}>
					<div className={styles.productcardimage}>
						<Tilt
							transitionSpeed={2000}
							tiltMaxAngleX={15}
							tiltMaxAngleY={15}
							scale={1.18}
						>
							<img src={img} />
						</Tilt>
					</div>
				</Link>
				<div className={styles.productcarddetails}>
					<h3>{title}</h3>
					<div className={styles.pricecontainer}>
						<p className={styles.originalprice}>${price}</p>
						{/* <p className="discount-price">${discounted_price}</p> */}
					</div>

					<p>Gender: {category_name}</p>
					{/* <div className="info">
							{!is_stock && <p className="out-of-stock">Out of stock</p>}
						</div> */}
				</div>
				<div className={styles.productcardbuttons}>
					<button
						// disabled={cartLoading}
						// onClick={() => addToCartHandler(product)}
						className={styles.cartbtn}
					>
						{/* {!isProductInCart(product) ? "Add To Cart" : "Go to Cart"} */}
						Add to Cart
					</button>
					<button
						// onClick={() => wishlistHandler(product)}
						className={styles.wishlistbtn}
					>
						{/* {!isProductInWishlist(product) ? (
								<AiOutlineHeart size={30} />
							) : (
								<AiTwotoneHeart size={30} />
							)} */}
						Like
					</button>
				</div>
			</div>
		</Tilt>
	);
};

export default ProductItem;
