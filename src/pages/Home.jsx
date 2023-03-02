import React, {useEffect} from 'react';
import About from "./About";
import Repository from "../components/Repository";
import {useFetching} from "../hooks/useFetching";
import {getAll} from "../API/RepositoryService";

const Home = () => {

    return (
        <div>
            <About/>
            <Repository name={'LIIuko'}/>
        </div>
    );
};

export default Home;