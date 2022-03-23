import React from 'react';
import classes from "./Form.module.css"
import Button from "../../../Component/Button/Button";
import InputText from "./InputText/inputText";
import InputArea from "./InputArea/InputArea";

const Form = () => {
    return (
        <form className={classes.Form}>
            <InputText> Full Name</InputText>
            <InputText> Business Email</InputText>
            <div className={classes.TextArea}>
                <InputArea>Message</InputArea>
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