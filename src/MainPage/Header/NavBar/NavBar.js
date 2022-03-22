import React from 'react';
import Menu from "./Menu/Menu";
import logo from './logo.webp';
import classes from './NavBar.module.css';


const NavBar = () => {
    return (
        <div className={classes.NavBar}>
            <img src={logo} alt="picture_alt"/>
            <Menu/>
        </div>

    );
};

export default NavBar;
