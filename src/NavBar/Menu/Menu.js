import React from 'react';
import Button from './Button/Button'

const Menu = (props) => {
    return (
        <>
            <Button>Services</Button>
            <Button> Our Work</Button>
            <Button>Company</Button>
            <Button>Blog</Button>
            <Button>
                <i className={'fa fa-sign-in'}/>
                Log in
            </Button>
        </>
    );
};

export default Menu;