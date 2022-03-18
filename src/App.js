import React from "react";
import './App.css';
import Layout from "./hoc/Layout/Layout";
import Main from "./Main/Main";


function App() {
    return (
        <div className="App">
            <Layout>
               <Main/>
            </Layout>
        </div>
    );
}

export default App;
