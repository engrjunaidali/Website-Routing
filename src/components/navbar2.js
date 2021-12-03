import React,{useState} from 'react'
import './navbar2.css';
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
                        <li><a><NavLink to="/" exact activeClassName="active_class">HOME</NavLink></a></li>
                        <li><a><NavLink to="/about" activeClassName="active_class">ABOUT</NavLink></a></li>
                        <li><a><NavLink to="/services" activeClassName="active_class">SERVICES</NavLink></a></li>
                        <li><a><NavLink to="/contact" activeClassName="active_class">CONTACT</NavLink></a></li>
                        <li><a><NavLink to="/careers" activeClassName="active_class">CAREERS</NavLink></a></li>
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
