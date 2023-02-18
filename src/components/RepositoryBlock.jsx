import React from 'react';
import classes from '../styles/Block.module.css'

const RepositoryBlock = ({name, html_url, forks, star, description}) => {
    return (
        <a href={html_url} className={classes.block}>
            <div>
                <h1>{name}</h1>
            </div>
            <p className={classes.description}>{description}</p>
            <div className={classes.reviews}>
                <p>{forks}</p>
                <p>{star}</p>
            </div>
        </a>
    );
};

export default RepositoryBlock;