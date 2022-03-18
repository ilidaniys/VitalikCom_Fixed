import React from 'react';
import NavBar from "../../TittleWrapper/NavBar/NavBar";
import classes from './Layout.module.css'



function Layout (props) {
    return (
        <div className={classes.Layout}>
            <NavBar/>
            <main className={classes.Main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;