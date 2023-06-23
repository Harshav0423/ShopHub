import styles from "./productImage.module.css";
import img from "../../../utilities/shoe.jpeg";
import Tilt from 'react-parallax-tilt'
function ProductImage() {
	return (
		<Tilt
			tiltEnable={false}
			scale={1.05}
			transitionSpeed={1000}
			className={styles.productdetailsimage}
		>
			<img src={img} />
		</Tilt>
	);
}

export default ProductImage;
