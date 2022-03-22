import React from 'react';
import Button from '../../../../Component/Button/Button'
import NavButton from "./NavButton/NavButton";

const Menu = () => {


    return (
        <>
            <NavButton type={'NavButton'}>Services</NavButton>
            <NavButton type={'NavButton'}> Our Work</NavButton>
            <NavButton type={'NavButton'}>Company</NavButton>
            <NavButton type={'NavButton'}>Blog</NavButton>
            <Button type={'RegisterButton'}>
                <i className={'fa fa-sign-in'}/>
                Log in
            </Button>
        </>
    );
};

export default Menu;
