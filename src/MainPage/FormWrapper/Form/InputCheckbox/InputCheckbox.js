import React from 'react';
import classes from  './InputCheckbox.module.css'

const InputCheckbox = () => {
    return (
        <div className={classes.CheckboxWrapper}>
            <input type="checkbox" id={'checkbox'} className={classes.Checkbox}/>
            <label className={classes.CheckboxLabel} htmlFor={'checkbox'}> I Agree to the <a href="">Quontex Privacy Policy</a></label>
        </div>
    );
};

export default InputCheckbox;