import React from 'react';
import classes from './SecondWrapper.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";
import Post from "./Post/Post";

const SecondWrapper = () => {
    return (
        <div>
            <TextWrapper>
                <h1> HOW <span> QUONTEX </span> CAN HELP YOUR PROJECT </h1>
                <p>Trust you can Verify. We know your outsourcing fears. Talk with our clients. Have transparent access
                    to developer metrics.<br/>
                    Tap into our proven formula using extended Agile teams to drive your product’s success. Our team
                    specializes in product delivery using today’s cutting-edge technologies - from AI/ML to Big Data and
                    the Cloud.</p>
            </TextWrapper>
            <div className={classes.PostWrapper}>
                <Post
                    title={'AUGMENTED TEAM'}
                    number={'01'}
                >
                    We help you hire top <br/> talent in Eastern Europe <br/> to deliver against your needs
                </Post>
                <Post
                    title={'PRODUCT DELIVERY'}
                    number={'02'}
                >
                    Let our team take care of your business requirements, you tell us what you need, we build it
                </Post>
                <Post
                    title={'OFF-SHORE HUB SETUP'}
                    number={'03'}
                >
                    Already taking advantage of all nearshore development has to offer? Great, we can help you cut costs
                    by setting up your own hub!
                </Post>
            </div>
        </div>
    );
};

export default SecondWrapper;