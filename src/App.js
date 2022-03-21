import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Header from "./Header/Header";

function App() {
    return (
        <div className="App">
            <Layout>
                <Header/>
            </Layout>
        </div>
    );
}

export default App;
