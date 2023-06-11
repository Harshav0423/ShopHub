import { useDispatch } from 'react-redux';
import styles from './userSelection.module.css';
import { loginActions } from '../../../reduxStore/login-slice';
const UserSelection = () => {
    const dispatch = useDispatch();
    function changeUser(event) {
        // event.preventdefault();  
        console.log((event.target.value));
        dispatch(loginActions.changingUser(event.target.value));
    }
    return <div className={styles.radiocontainer}>
        <input defaultChecked readOnly={true}  type="radio" name="usertype" value="user" id="user" onClick={changeUser} />
        <label htmlFor="user">User</label>
        <input readOnly={true}   type="radio" name="usertype" value="seller" id="seller" onClick={changeUser}/>
        <label htmlFor="seller">Seller</label>
    </div>
}
export default UserSelection;