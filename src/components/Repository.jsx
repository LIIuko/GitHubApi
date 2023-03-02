import React, {useEffect, useState} from 'react';
import {getAll} from "../API/RepositoryService";
import {useFetching} from "../hooks/useFetching";
import RepositoryBlock from "./RepositoryBlock";
import classes from '../styles/Repositories.module.css'
import Loader from "./Loader";

const   Repository = ({name}) => {

    const [repositories, setRepositories] = useState([]);
    const [requestUserRepos, isLoading] = useFetching(async () => {
        const response = name ? await getAll(name): await getAll();
        setRepositories(response.data);
    })

    useEffect((name) => {
        requestUserRepos();
    }, [name])


    if(repositories.length === 0){
        return (
            isLoading
                ?
                <Loader/>
                :
                <></>
        )
    }

    return (
        <div>
            {isLoading
                ?
                <Loader/>
                :
                <>
                    <div className={classes.block__title}>
                        <h1 className={classes.title}>Проекты {name}</h1>
                        <div className={classes.block__img}>
                            <img className={classes.avatar} src={repositories.at(0).owner.avatar_url} alt=""/>
                        </div>
                    </div>
                    <div className={classes.repositories}>
                        {repositories.map((repository) => (
                            <RepositoryBlock key={repository.key}
                                             name={repository.name}
                                             html_url={repository.html_url}
                                             forks={repository.forks}
                                             star={repository.stargazers_count}
                                             description={repository.description}
                            />
                        ))}
                    </div>
                </>
            }
        </div>
    );
};

export default Repository;