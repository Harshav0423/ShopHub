import Home from "../pages/home/home";
import Cart from "../pages/cart/cart";
import Product from "../pages/product/product";
import Account from "../pages/account/account";
import { Route } from "react-router-dom";
const UserRoutes = () => {
	return (
		<>
			<Route path="/" Component={<Home/>} />
			<Route path="/cart" Component={Cart} />
			<Route path="/account" Component={Account} />
			<Route path="/product" Component={Product} />
		</>
	);
};

export default UserRoutes;
