import styles from "./productDesc.module.css";

function ProductDescription({ selectedProduct }) {
	return (
		<div className={styles.productdetailsdescription}>
			<h1 className={styles.productname}>{selectedProduct?.name}</h1>

			<div className={styles.productpricecontainer}>
				<span className={styles.productdiscountprice}>
					{" "}
					${selectedProduct?.discounted_price}
				</span>
			</div>

			<p className={styles.descriptioncontainer}>
				<span>Description</span>: {selectedProduct?.description}
			</p>

			<span className={styles.gendercontainer}>
				<span>Gender</span>: {selectedProduct?.category_name}
			</span>
			<p className={styles.sizecontainer}>
				<span>Size</span>: {selectedProduct?.size}
			</p>

			<div className={styles.productcardbuttonscontainer}>
				<button
					// disabled={cartLoading}
					// onClick={() => addToCartHandler(selectedProduct)}
					className={styles.addtocartbtn}
				>
					{/* {!isProductInCart(selectedProduct) ? "Add to cart" : "Go to cart"} */}
					{true ? "Add to cart" : "Go to cart"}
				</button>
				<button
					// disabled={cartLoading}
					// onClick={() => wishlistHandler(selectedProduct)}
					className={styles.addtowishlistbtn}
				>
					Add to wishlist
					{/* {!isProductInWishlist(selectedProduct)
						? "Add to wishlist"
						: "Remove from wishlist"} */}
				</button>
			</div>
		</div>
	);
}
export default ProductDescription;
