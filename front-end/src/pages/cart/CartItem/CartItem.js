import { useDispatch } from "react-redux";
import styles from "./CartItem.module.css";
// import { cartActions } from "../../store/cart-slice";
import { MdDelete } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import shoeImg from '../../../utilities/shoe.jpeg'
const CartItem = () => {
	const dispatch = useDispatch();
	const product = {
		id: "b1",
		title: "First Shoe",
		description: "First book ever written by a novice",
		price: 9,
		img: shoeImg,
		category_name: "M",
		qty:1
	}
	const removeItemHandler = () => {
		// dispatch(cartActions.removeItemFromCart(id));
	};
	const addItemHandler = () => {
		// dispatch(cartActions.addItemToCart({ id, title, price }));
	};
	return (
		<div className={styles.productcard} key={product.id}>
			<div>
				<img className={styles.prodimg} alt={product.name} src={product.img} />
			</div>
			<div className={styles.description}>
				<h3>{product.name}</h3>
				<p>Price:${product.price}</p>
				<p>Size: {product.size}</p>
			</div>
			<div className={styles.buttoncontainer}>
				<div className={styles.countbtnsection}>
					<button className={styles.counterbtn} onClick={e=>{console.log(e)}}>-</button>
					<span>{product.qty}</span>
					<button className={styles.counterbtn} onClick={e=>{console.log(e)}}>+</button>
				</div>
				<div className={styles.secondarybtnsection}>
					<MdDelete size={25} onClick={e=>{console.log('remove item')}}/>
					<AiFillHeart size={25} onClick={e=>{console.log('remove item')}}/>
				</div>
			</div>

		</div>
	);
};

export default CartItem;
