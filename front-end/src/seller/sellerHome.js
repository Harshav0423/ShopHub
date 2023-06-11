import { useDispatch, useSelector } from "react-redux";
import Popup from "../components/popup/popup";
import Products from "../pages/product/products";
import { uiActions } from "../reduxStore/ui-slice";
import AddProduct from "./Addproduct/addProduct";

function SellerHome(props) {
	const showAddProduct = useSelector((state) => state.ui.addProductIsVisible);
	const dispatch = useDispatch();
	function closeAddProduct() {
		dispatch(uiActions.toggleAddProduct());
	}
	return (
		<div>
			{showAddProduct && (
                <Popup title="Add a Product here.." closeFunction={closeAddProduct}>
                    <AddProduct />
                </Popup>
			)}
			<Products />
		</div>
	);
}

export default SellerHome;
