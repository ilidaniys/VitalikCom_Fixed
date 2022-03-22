import React from 'react';
import TextWrapper from "../Component/TextWrapper/TextWrapper";
import Post from "./Post/Post";

const SecondWrapper = () => {
    return (
        <div>
            <TextWrapper>
                <h1>
                    HOW
                    <span>
                    QUONTEX
                  </span>
                    CAN HELP YOUR PROJECT
                </h1>
                <p>Trust you can Verify. We know your outsourcing fears. Talk with our clients. Have transparent access
                    to developer metrics.
                    Tap into our proven formula using extended Agile teams to drive your product’s success. Our team
                    specializes in product delivery using today’s cutting-edge technologies - from AI/ML to Big Data and
                    the Cloud.</p>
            </TextWrapper>
            <Post title={'AUGMENTED TEAM'}>

            </Post>
        </div>
    );
};

export default SecondWrapper;