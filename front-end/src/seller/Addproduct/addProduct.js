import React, { useState } from "react";
import Input from "../../components/input";
import styles from "./addProduct.module.css";
function AddProduct() {
	const [prodTitle, setProdTitle] = useState("");
	const [prodCategory, setProdCategory] = useState("");
	const [prodDesc, setProdDesc] = useState("");
	const [prodQuantity, setProdQuantity] = useState(1);
	const [prodPrice, setProdPrice] = useState(1.0);

	function handleAddProduct(event) {
		// event.preventdefault();
		console.log(prodTitle, prodCategory, prodDesc, prodQuantity, prodPrice);
	}
	return (
		<div className={styles.container}>
			<form>
				<div className={styles.inputgroup}>
					<div>
						<Input
							type="text"
							name="prodname"
							content="Product Name"
							value={prodTitle}
							onChange={(e) => setProdTitle(e)}
						/>
					</div>
					<div>
						<Input
							type="text"
							name="prodcategory"
							content="Product Category"
							value={prodCategory}
							onChange={(e) => setProdCategory(e)}
						/>
					</div>
				</div>
				<div className={styles.description}>
					<lable htmlFor="desc" className={styles.labeldesc}>
						Product Description
					</lable>
					<textarea
						name="desc"
						className={styles.textdesc}
						placeholder="Specifications about the Product"
						value={prodDesc}
						onChange={(e) => {
							setProdDesc(e.target.value);
						}}
					/>
				</div>
				<div className={styles.inputgroup}>
					<div>
						<Input
							type="number"
							name="prodquantity"
							content="Product Quantity(Units)"
							value={prodQuantity}
							onChange={(e) => setProdQuantity(e)}
						/>
					</div>
					<div>
						<Input
							type="number"
							name="prodprice"
							content="Product Price $"
							value={prodPrice}
							onChange={(e) => setProdPrice(e)}
						/>
					</div>
				</div>
				<div className={styles.btns}>
					<button
						type="button"
						className={styles.addbtn}
						onClick={(e) => {
							handleAddProduct(e);
						}}
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
