import React from 'react';
import NavBar from "./NavBar/NavBar";
import classes from "./Header.module.css";
import Main from "./Main/Main";

function Header(props) {
    return (
        <div className={classes.Header}>
            <NavBar/>
            <div className={classes.Background}/>
            <main>
                <Main/>
            </main>
        </div>
    );
}

export default Header;
