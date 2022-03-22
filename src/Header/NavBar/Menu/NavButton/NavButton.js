import React from 'react';
import classes from './NavButton.module.css'

const Button = (props) => {

    return (
        <button
            className={classes.NavButton}
        >

            <a href="/"> {props.children}</a>
        </button>
    )
};

export default Button;
