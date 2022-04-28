import React, { useState} from 'react'
import './sigin.css'
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom";

import { auth } from "./firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        if(email==="123@gmail.com"){
            auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/create');
            })
            .catch(error => alert(error.message))
        }else{
            alert("You are not an admin")
        }

       
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/create');
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to= '/'>
                <img className="login__logo"
                src='https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png' alt=''/>
            
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn}className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the BLOGWEB Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button className='login__registerButton' onClick={register}>Create your Account</button>
            </div>
        </div>
    )
}

export default Login