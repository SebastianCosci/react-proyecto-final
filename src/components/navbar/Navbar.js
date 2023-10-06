import CartWidget from "../CartWidget/CartWidget.js"
import "./navbar.css";
import logo from "./assets/logo.jpg"
import {NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="navbar">
            <Link to='/'>
              <img src={logo} alt="logo-makeupholicok" className="brand"/>
            </Link>
            <div className="menu">
                <NavLink to={`/category/bases`} className="nav-button">Bases</NavLink>
                <NavLink to={`/category/labiales`} className="nav-button">Labiales</NavLink>
            </div>
            <CartWidget />
        </nav>
    );
}

export default NavBar;
