import React, {useEffect, useState} from 'react';
import {getAll} from "../API/RepositoryService";
import {useFetching} from "../hooks/useFetching";
import RepositoryBlock from "./RepositoryBlock";
import classes from '../styles/Repositories.module.css'
import Loader from "./Loader";

const Repository = () => {

    const [repositories, setRepositories] = useState([]);
    const [requestUserRepos, isLoading] = useFetching(async () => {
        const response = await getAll();
        setRepositories(response.data);
    })

    useEffect(() => {
        requestUserRepos();

    }, [])
    console.log(repositories);
    return (
        <div >
            {isLoading
                ?
                <Loader/>
                :
                <>
                    <h1>Проекты</h1>
                    <div className={classes.repositories}>
                        {repositories.map((repository) => (
                            <RepositoryBlock key={repository.key}
                                             name={repository.name}
                                             html_url={repository.html_url}
                                             forks={repository.forks}
                                             star={repository.stargazers_count}
                                             description={repository.description}/>
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default Repository;