import React, {useEffect} from 'react';
import classes from '../styles/About.module.css'

const About = () => {

    return (
        <div>
            <div className={classes.avatar__block}>
                <img className={classes.avatar} src={'https://avatars.githubusercontent.com/u/68843727?v=4'} alt=""/>
            </div>
        </div>
    );
};

export default About;