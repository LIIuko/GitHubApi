import './App.css';
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    );
}

export default App;
