import React from 'react';
import classes from './Tutorial.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";
import TutorialCard from "./TutorialCard/TutorialCard";
import img1 from './1_tutorial.jfif'
import img2 from './2_tutorial.png'

const Tutorial = () => {
    return (
        <div className={classes.Tutorial}>
            <div className={classes.Text}>
                <TextWrapper>
                    <h1>THOUGHT <span>LEADERSHIP</span></h1>
                </TextWrapper>
            </div>
            <div className={classes.TutorialCard}>
            <TutorialCard
            img={img1}
            title={'Node.js tutorial'}
            name={'Andreu Slynchyk '}
            data={'March 28, 2022'}
            paragraf={'Here you can learn how to code on Node.js'}
            />
            <TutorialCard
                img={img2}
                title={'Node.js tutorial'}
                name={'Andreu Slynchyk '}
                data={'March 28, 2022'}
                paragraf={'Here you can learn how to code on Node.js'}
            />
            </div>
        </div>
    );
};

export default Tutorial;