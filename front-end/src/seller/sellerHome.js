import { useDispatch, useSelector } from "react-redux";
import Popup from "../components/popup/popup";
import Products from "../pages/product/products";
import { errorActions } from "../reduxStore/error-slice";
import { uiActions } from "../reduxStore/ui-slice";
import AddProduct from "./Addproduct/addProduct";

function SellerHome(props) {
	const showAddProduct = useSelector((state) => state.ui.addProductIsVisible);
	const dispatch = useDispatch();
	const showError = useSelector(state => state.error.isError);
	const showErrorMessage = useSelector(state => state.error.message);
	function closeAddProduct() {
		dispatch(uiActions.toggleAddProduct());
	}
	function toClearError() {
        dispatch(errorActions.deactivateError())
    }
	return (
		<div>
			{showAddProduct && (
                <Popup title="Add a Product here.." closeFunction={closeAddProduct}>
                    <AddProduct closeFunction={closeAddProduct}/>
                </Popup>
			)}
			{showError &&
            <Popup title="Success" closeFunction={toClearError}>
                <div>{showErrorMessage}</div>
            </Popup>
        }
			<Products />
		</div>
	);
}

export default SellerHome;
