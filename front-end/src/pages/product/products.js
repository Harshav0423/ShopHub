import ProductItem from "./productItem";
import styles from "./products.module.css";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
import {AiOutlineHeart} from 'react-icons' 
import shoeImg from "../../utilities/shoe.jpeg";
const DUMMY_PRODUCTS = [
	{
		id: "b1",
		title: "First Shoe",
		description: "First book ever written by a novice",
		price: 9,
		img: shoeImg,
		category_name: "M",
	},
	{
		id: "b2",
		title: "Second Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
	{
		id: "b3",
		title: "Third Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
	{
		id: "b1",
		title: "First Shoe",
		description: "First book ever written by a novice",
		price: 9,
		img: shoeImg,
		category_name: "M",
	},
	{
		id: "b2",
		title: "Second Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
	{
		id: "b3",
		title: "Third Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
	{
		id: "b1",
		title: "First Shoe",
		description: "First book ever written by a novice",
		price: 9,
		img: shoeImg,
		category_name: "M",
	},
	{
		id: "b2",
		title: "Second Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
	{
		id: "b3",
		title: "Third Shoe",
		description: "Second book ever written by a Pro",
		price: 11,
		img: shoeImg,
		category_name: "W",
	},
];

const Products = (props) => {
	return (
		<div className={styles.productcardscontainer}>
			{DUMMY_PRODUCTS &&
				DUMMY_PRODUCTS.map((product) => {
					const { id, title, description, price, img, category_name } = product;
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
								<Link to={`product-detail/${id}`}>
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
				})}
		</div>
	);
};

export default Products;
