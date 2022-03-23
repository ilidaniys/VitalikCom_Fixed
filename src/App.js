import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Header from "./MainPage/Header/Header";
import FirstWrapper from "./MainPage/FirstWrapper/FirstWrapper";
import ThirdWrapper from "./MainPage/ThirdWrapper/ThirdWrapper";
import SecondWrapper from "./MainPage/SecondWrapper/SecondWrapper";
import Gallery from "./MainPage/Gallery/Gallery";
import Tutorial from "./MainPage/Tutorial/Tutorial";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <FirstWrapper/>
                <SecondWrapper/>
                <ThirdWrapper/>
                <Gallery/>
                <Tutorial/>

            </Layout>
        </div>
    );
}

export default App;
