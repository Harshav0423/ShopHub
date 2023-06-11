import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../login/login';
import SignUp from '../register/signUp';
import styles from './initial.module.css';
import UserSelection from './userSelection/userSelection';

const InitialPage = () => {
    const [displayLogin, setDisplayLogin] = useState(true);
    
    const goToLoginForm = (e) => {
        // e.preventDefault();
        setDisplayLogin(true);
        console.log(displayLogin, "from login")
    }
    const goToSignUpForm = () => {
        setDisplayLogin(false);
        console.log(displayLogin, "from signup")

    }
    return (<div className={styles.container}>

        <div className={styles.left}>
            <UserSelection />
        </div>
        <div className={styles.right}>
            {displayLogin ? (<Login toggleForm={goToSignUpForm} />) : (<SignUp toggleForm={goToLoginForm} />)}
        </div>
    </div>);
}

export default InitialPage;