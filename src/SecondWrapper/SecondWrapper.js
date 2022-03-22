import React from 'react';
import classes from './SecondWrapper.module.css'
import TextWrapper from "../Component/TextWrapper/TextWrapper";
import img1 from './ImgSecondWrapper/1_java.webp'
import img2 from './ImgSecondWrapper/2_dot_net.webp'
import img3 from './ImgSecondWrapper/3_python.webp'
import img4 from './ImgSecondWrapper/4_node_js.webp'
import img5 from './ImgSecondWrapper/5_react.webp'
import img6 from './ImgSecondWrapper/6_kotlin.webp'
import BlockWrapper from "./BlockWrapper/BlockWrapper";


const SecondWrapper = () => {
    return (
        <div className={classes.SecondWrapper}>
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
                <div className={classes.Block}>
                <BlockWrapper>
                    <img src={img1} alt="imge1"/>
                    <img src={img2} alt="imge2"/>
                    <img src={img3} alt="imge3"/>
                    <img src={img4} alt="imge4"/>
                    <img src={img5} alt="imge5"/>
                    <img src={img6} alt="imge6"/>
                </BlockWrapper>
                    <BlockWrapper>
                        <img src={img1} alt="imge1"/>
                        <img src={img2} alt="imge2"/>
                        <img src={img3} alt="imge3"/>
                        <img src={img4} alt="imge4"/>
                        <img src={img5} alt="imge5"/>
                        <img src={img6} alt="imge6"/>
                    </BlockWrapper>
                </div>
            </TextWrapper>
        </div>
    );
};

export default SecondWrapper;