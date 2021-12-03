import React,{useState} from 'react'
import "./navbar.css";
import {Route, BrowserRouter as Router,NavLink} from "react-router-dom";

function Navbar() {
    const [menu, setMenu] = useState(false);
    const changeMenu = () => setMenu(!menu);
    // const changeClass = () =>{
    //     let newClass;
        
    //     return cset(newClass ==="active"?"reset":"active");
    // }

    return (
        <div>
            <div className="navbar-container">
                <div className="header-title">
                    <h1>Junaid Ali</h1>
                </div>
                <div className="header-menu">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="active_class" href="#home">HOME</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active_class">ABOUT</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active_class">SERVICES</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active_class">CONTACT</NavLink></li>
                        <li><NavLink to="/careers" activeClassName="active_class">CAREERS</NavLink></li>
                    </ul>
                </div>
                <div className="settings">
                    <div className="login" activeClassName="active_class"><NavLink to="/login">Login</NavLink></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
