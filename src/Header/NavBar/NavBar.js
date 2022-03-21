import React from 'react';
// import Layout from "../Hoc/Layout";
import Menu from "./Menu/Menu";
import logo from './logo.webp';
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <img src={logo} alt="picture"/>
            <Menu/>
        </div>

    );
};

export default NavBar;
