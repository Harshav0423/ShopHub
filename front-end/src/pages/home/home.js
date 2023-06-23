import { useEffect, useState } from "react";
import styles from "./home.module.css";
import Search from "./search/search";
import Products from "../product/products";
import axios from "axios";
import { dataActions } from "../../reduxStore/data-slice";
import { useDispatch, useSelector } from "react-redux";
import { errorActions } from "../../reduxStore/error-slice";
import { useLoaderData } from "react-router-dom";
const Home = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const dispatch = useDispatch();
    const prods = useLoaderData();
	dispatch(dataActions.setProducts(prods));
	const pds = useSelector((state) => state.data.products);

	function handleSearch() {
		console.log("search the items");
	}
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<Search
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
					searchItems={handleSearch}
				/>
				<Products />
			</div>
		</div>
	);
};

// getting products
export async function loader() {
	let prods = {};
	await axios
		.get("http://localhost:8080/all-products")
		.then((res) => {
			console.log(res);
			const data = res.data;
			const response_code = data.status;
			if (response_code === 200) {
				prods = JSON.stringify({ ...data.data });
			} else {
				console.log(data.message);
			}
		})
		.catch((error) => {
			console.log(error);
		});
	return prods;
}
export default Home;

// search box with filters, products, Layout
