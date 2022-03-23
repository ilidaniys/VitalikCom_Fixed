import React from 'react';
import classes from "./Form.module.css"
import Button from "../../../Component/Button/Button";
import InputText from "./InputText/inputText";

const Form = () => {
    return (
        <form className={classes.Form}>
            <InputText> Full Name</InputText>
            <InputText/>
            <div className={classes.TextArea}>
                <input type="text-area"/>
            </div>
            <div>
                <input type="checkbox"/>
            </div>
            <div className={classes.Submit}>
                <Button type={'MainDownButton'}> send </Button>
            </div>
        </form>
    );
};

export default Form;