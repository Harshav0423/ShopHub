import axios from "axios";
import { useLoaderData } from "react-router-dom";
import ProductDescription from "./productDesc";
import styles from "./productDetail.module.css";
import ProductImage from './productImage'
function ProductDetail() {
	const selectedProduct = useLoaderData();
	return (
		<div className={styles.productspagecontainer}>
			<ProductImage selectedProduct={selectedProduct} />
			<ProductDescription selectedProduct={selectedProduct} />
		</div>
	);
}

export async function loader({request, params}) {
	const prodId = params.id;
	let product = {}
	await axios.get("http://localhost:8080/product/"+7)
		.then((res) => {
			console.log(res);
			const data = res.data;
			const response_code = data.status;
			if (response_code === 200) {
				product = JSON.stringify({ ...data.data });
			} else {
				console.log(data.message);
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return product;
}

export default ProductDetail;
 