import React from 'react';
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";

const TittleWrapper = () => {
    const styleTitleWrapper = {
        width: '75%',
        height: '10rem'
    }
    return (
        <div className={'titleWrapper'}>
            <NavBar/>
            <Main/>
        </div>
    );
};

export default TittleWraper;



