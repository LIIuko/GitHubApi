import React from 'react';
import About from "./About";
import Repository from "../components/Repository";

const Home = () => {
    return (
        <div>
            <About/>
            <Repository name={'LIIuko'}/>
        </div>
    );
};

export default Home;