import React from 'react';
import classes from './TextDecoration.module.css'

const TextDecoration = (props) => {
    return (
        <div className={classes.TextDecoration}>
            <h1>
                WE HELP YOU BUILD
                <p>
                    TECH PRODUCTS
                </p>
                SEAMLESSLY
            </h1>
            <p>Getting quality product deliverables to tight deadlines can seem impossible, we help you find talent,
                build teams and launch products</p>
        </div>
    );
};

export default TextDecoration;