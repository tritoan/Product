import React from 'react';
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login">
            <Link>
                <img className="login_logo" src="./img/logo.png" alt="" />
            </Link>
            
            <div className="login_container">
                <h1>Đăng Nhập</h1>
                    <form>
                        <h5>Email</h5>
                        <input type="email"  />
                        <h5>Password</h5>
                        <input type="password" />
                        <button type="submit" className="btn_submit">Sign In</button>
                    </form>
                    <button className="login_btn_register">Create Account Your Name</button>
            </div>
            
        </div>
    );
};

export default Login;