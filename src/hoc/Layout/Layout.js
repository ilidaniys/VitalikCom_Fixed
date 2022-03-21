import React from 'react';
import NavBar from "../../Header/NavBar/NavBar";
import classes from './Layout.module.css'


function Layout(props) {
    return (
        <div className={classes.Layout}>
            {props.children}
        </div>
    );
}

export default Layout;
