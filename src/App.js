import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Header from "./Header/Header";
import FirstWrapper from "./FirstWrapper/FirstWrapper";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
                <FirstWrapper/>
            </Layout>
        </div>
    );
}

export default App;
