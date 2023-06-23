import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Input from "../../components/input";
import { errorActions } from "../../reduxStore/error-slice";
import styles from "./addProduct.module.css";
import axios from "axios";

function AddProduct(props) {
	const [prodTitle, setProdTitle] = useState("");
	const [prodCategory, setProdCategory] = useState("");
	const [prodDesc, setProdDesc] = useState("");
	const [prodQuantity, setProdQuantity] = useState(1);
	const [prodPrice, setProdPrice] = useState(1.0);
	const [openButton, setOpenButton] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		if (
			prodTitle.trim() !== "" &&
			prodCategory.trim() !== "" &&
			prodDesc.trim() !== "" &&
			prodQuantity &&
			prodPrice
		) {
			setOpenButton(true);
		} else {
			setOpenButton(false);
		}
	}, [prodTitle, prodCategory, prodDesc, prodQuantity, prodPrice]);

	const handleAddProduct = async (event) => {
		if (
			prodTitle.trim() !== "" &&
			prodCategory.trim() !== "" &&
			prodDesc.trim() !== "" &&
			prodQuantity &&
			prodPrice
		) {
			let payload = {
				titile: prodTitle,
				description: prodDesc,
				category: prodCategory,
				price: prodPrice,
				quantity: prodQuantity,
				seller_id: 19,
			};

			const r = await axios
				.post("http://localhost:8080/save-product", payload)
				.then((res) => {
					console.log(res);
					const data = res.data;
					const response_code = data.status;
					if (response_code === 200) {
						dispatch(errorActions.activateError(data.message));
						props.closeFunction();
					}
					setTimeout(() => {
						dispatch(errorActions.deactivateError());
					}, 750);
				})
				.catch((error) => {
					console.log(error);
					dispatch(errorActions.activateError("Something went wrong"));
				});
		}
	};
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
						className={
							openButton
								? `${styles.addbtn}`
								: `${styles.addbtn} ${styles.greybtn}`
						}
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


function action() {
	
}

export default AddProduct;
