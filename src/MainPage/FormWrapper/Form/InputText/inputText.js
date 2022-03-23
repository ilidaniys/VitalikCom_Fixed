import React from 'react';
import classes from './InputText.module.css'

const InputText = (props) => {
    return (
        <div className={classes.InputWrapper}>
            <input className={classes.Input} type={'text'} placeholder={' '}/>
            <div className={classes.Text}>{props.children}</div>
        </div>
    );
};

export default InputText;