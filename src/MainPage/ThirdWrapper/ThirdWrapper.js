import React from 'react';
import classes from './ThirdWrapper.module.css'
import TextWrapper from "../../Component/TextWrapper/TextWrapper";
import img1 from './ImgSecondWrapper/1_java.webp'
import img2 from './ImgSecondWrapper/2_dot_net.webp'
import img3 from './ImgSecondWrapper/3_python.webp'
import img4 from './ImgSecondWrapper/4_node_js.webp'
import img5 from './ImgSecondWrapper/5_react.webp'
import img6 from './ImgSecondWrapper/6_kotlin.webp'
import BlockWrapper from "./BlockWrapper/BlockWrapper";


const ThirdWrapper = () => {
    return (
        <div className={classes.SecondWrapper}>
            <TextWrapper>
                <h1> OUR <span> EXPERTISE </span>
                </h1>
                <p>This section should include a wide selection of developers that are available to hire across multiple
                    specialties and technologies. Later, we'll create separate landing pages for each.</p>
            </TextWrapper>
            <div className={classes.Block}>
                <a href="">
                    <BlockWrapper title={'PROGRAMMING LANGUAGES'}>
                        <img src={img1} alt="imge1"/>
                        <img src={img2} alt="imge2"/>
                        <img src={img3} alt="imge3"/>
                        <img src={img4} alt="imge4"/>
                        <img src={img5} alt="imge5"/>
                        <img src={img6} alt="imge6"/>
                    </BlockWrapper>
                </a>
                <a href="/">
                    <BlockWrapper title={'CLOUDS AND DATA LAKES'}>
                        <img src={img1} alt="imge1"/>
                        <img src={img2} alt="imge2"/>
                        <img src={img3} alt="imge3"/>
                        <img src={img4} alt="imge4"/>
                        <img src={img5} alt="imge5"/>
                        <img src={img6} alt="imge6"/>
                    </BlockWrapper>
                </a>
            </div>
        </div>
    );
};

export default ThirdWrapper;