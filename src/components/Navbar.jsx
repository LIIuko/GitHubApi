import React from 'react';
import {routes, routeHome} from "../utils";
import {Link} from "react-router-dom";
import classes from "../styles/Navbar.module.css";


const Navbar = () => {

    return (
        <div className={classes.navbar}>
            <Link to={routeHome.path} className={classes.logo}>Trader</Link>
            <div>
                {routes.map(({path, title}) => (
                    <Link className={classes.link} key={path} to={path}>{title}</Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;