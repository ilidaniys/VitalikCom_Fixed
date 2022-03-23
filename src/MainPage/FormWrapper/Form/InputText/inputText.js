import React from 'react';
import classes from './InputText.module.css'

const InputText = () => {
    return (
        <div>
            <input className={classes.Input} type={'text'}>
            </input>
            <div>Full name</div>
        </div>
    );
};

export default InputText;