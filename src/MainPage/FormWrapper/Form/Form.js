import React from 'react';
import classes from "./Form.module.css"
import Button from "../../../Component/Button/Button";
import InputText from "./InputText/inputText";
import InputArea from "./InputArea/InputArea";
import InputCheckbox from "./InputCheckbox/InputCheckbox";

const Form = () => {
    return (
        <form className={classes.Form}>
            <InputText> Full Name</InputText>
            <InputText> Business Email</InputText>
            <div className={classes.TextArea}>
                <InputArea>Message</InputArea>
            </div>
            <div className={classes.Checkbox}>
                <InputCheckbox/>
            </div>
            <div className={classes.Submit}>
                <Button type={'MainDownButton'}> send </Button>
            </div>
        </form>
    );
};

export default Form;