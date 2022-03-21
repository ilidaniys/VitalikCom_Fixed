import React from 'react';
import Button from './Button/Button'

const Menu = (props) => {
    return (
        <>
            <Button type={'NavButton'}>Services</Button>
            <Button type={'NavButton'}> Our Work</Button>
            <Button type={'NavButton'}>Company</Button>
            <Button type={'NavButton'}>Blog</Button>
            <Button>
                <i className={'fa fa-sign-in'}/>
                Log in
            </Button>
        </>
    );
};

export default Menu;
