import { Link, useNavigate } from "react-router-dom";
import styles from "./mainNavigation.module.css";
import { loginActions } from "../../reduxStore/login-slice";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../reduxStore/ui-slice";
import { useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Tooltip } from "react-tooltip";
const MainNavigation = () => {
	const typeOfUser = useSelector((state) => state.login.userType);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const adprod = useSelector((state) => state.ui.addProductIsVisible);
	function navOnLogout() {
		dispatch(loginActions.logout());
		navigate("/");
	}
	function addProduct() {
		dispatch(uiActions.toggleAddProduct());
		console.log(adprod);
	}
	return (
		<header className={styles.header}>
			<h1>Shop Hub</h1>
			<nav>
				<ul className={styles.list}>
					{typeOfUser === "user" && (
						<>
							<li>
								<Link to="/user">Home</Link>
							</li>

							<li data-for="wishlist">
								<Link
									data-tooltip-id="wishlist"
									data-tooltip-content="Wishlist"
									to="wishlist"
								>
									<AiOutlineHeart size={30} />
								</Link>
								<Tooltip id="wishlist" place="top" effect="solid" />
							</li>

							<li>
								<Link to="cart">Cart</Link>
							</li>
						</>
					)}
					{typeOfUser === "seller" && (
						<>
							<li>
								<Link to="/seller">Home</Link>
							</li>
							<li>
								<Link to="my-productlist">My Products</Link>
							</li>
							<li>
								<button
									type="button"
									className={styles.lgtbutton}
									onClick={addProduct}
								>
									Add a Product
								</button>
							</li>
						</>
					)}
					<li>
						<Link to="account">Account</Link>
					</li>
					<li>
						<button
							type="button"
							className={styles.lgtbutton}
							onClick={navOnLogout}
						>
							Logout
						</button>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
