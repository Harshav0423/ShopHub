import "./App.css";
import { useSelector } from "react-redux";
import InitialPage from "./pages/initial/initial";
import { useEffect } from "react";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
	useNavigate,
} from "react-router-dom";
import ProductDetail, {
	loader as productGetter,
} from "./pages/product/productDetails/productDetail";
import Home, { loader as productsLoader } from "./pages/home/home";
import Cart from "./pages/cart/cart";
import Layout from "./pages/layout/layout";
import Account from "./pages/account/account";
import SellerHome from "./seller/sellerHome";
const router = createBrowserRouter([
	{
		path: "/",
		element: <InitialPage />,
		// error element
	},
	{
		path: "/user",
		element: <Layout />,
		children: [
			{ index: true, element: <Home />, loader: productsLoader },
			{ path: "cart", element: <Cart /> },
			{ path: "account", element: <Account /> },
			{
				path: "product-detail/:id",
				element: <ProductDetail />,
				loader: productGetter,
			},
		],
	},
	{
		path: "/seller",
		element: <Layout />,
		children: [
			{ index: true, element: <SellerHome /> },
			{ path: "account", element: <Account /> },
		],
	},
]);

function App() {
	const typeOfUser = useSelector((state) => state.login.userType);

	const isLog = useSelector((state) => state.login.isAuthenticated);
	useEffect(() => {
		console.log(isLog, "from app.js");
	}, [isLog]);

	return <RouterProvider router={router} />;
}

export default App;
