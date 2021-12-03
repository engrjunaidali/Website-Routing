import React from 'react'
import "./login.css";
const login = () => {
    return (
        <div className="login-container">
        
            <form action="" className="login-form">
                <label htmlFor="">Username</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" />
                <button>Submit</button>
            </form>
            
            <div>
                <h1>Login Panel</h1>
            </div>
        </div>
    )
}

export default login
