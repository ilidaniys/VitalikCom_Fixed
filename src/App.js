import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Header from "./Header/Header";
import FirstWrapper from "./FirstWrapper/FirstWrapper";
import SecondWrapper from "./SecondWrapper/SecondWrapper";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <FirstWrapper/>
                <SecondWrapper/>
            </Layout>
        </div>
    );
}

export default App;
