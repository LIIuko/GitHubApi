import React from 'react';
import classes from '../styles/Block.module.css'
import starG from "../assets/images/star.png"
import fork from "../assets/images/fork.png"

const RepositoryBlock = ({name, html_url, forks, star, description}) => {
    return (
        <a href={html_url} className={classes.block}>
            <div className={classes.title}>
                <h1>{name}</h1>
            </div>
            <p className={classes.description}>{description}</p>
            <div className={classes.reviews}>
                <div className={classes.block__img}>
                    <img className={classes.img} src={starG} alt="звезда"/>
                </div>
                <p className={classes.info}>{star}</p>
                <div className={classes.block__img}>
                    <img className={classes.img} src={fork} alt="форк"/>
                </div>
                <p className={classes.info}>{forks}</p>
            </div>
        </a>
    );
};

export default RepositoryBlock;