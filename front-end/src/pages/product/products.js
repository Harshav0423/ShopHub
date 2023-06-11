import ProductItem from "./productItem";
import classes from "./products.module.css";

const DUMMY_PRODUCTS = [
	{
		id: "b1",
		title: "First book",
		description: "First book ever written by a novice",
		price: 9,
	},
	{
		id: "b2",
		title: "Second book",
		description: "Second book ever written by a Pro",
		price: 11,
	},
];
const Products = (props) => {
	return (
		<section className={classes.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((item) => (
					<ProductItem
						title={item.title}
						price={item.price}
						description={item.description}
						key={item.id}
						id={item.id}
					/>
				))}
			</ul>
		</section>
	);
};

export default Products;
