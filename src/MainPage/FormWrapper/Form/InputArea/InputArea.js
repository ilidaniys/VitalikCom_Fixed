import React from 'react';
import classes from "./InputArea.module.css"

const InputArea = (props) => {
    return (
        <div className={classes.InputArea}>
            <textarea className={classes.Input} placeholder={' '}/>
            <div className={classes.Text}>{props.children}</div>
        </div>
    );
};

export default InputArea;