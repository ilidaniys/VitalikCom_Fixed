import React from 'react';
import NavBar from "../../NavBar/NavBar";
import classes from './Layout.module.css'



function Layout (props) {
    return (
        <div className={classes.Layout}>
            <NavBar/>
            <div className={classes.Background}/>
            <main className={classes.Main}>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;
