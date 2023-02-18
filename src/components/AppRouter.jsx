import React from 'react';
import {Route, Routes} from "react-router-dom";
import {routes} from "../utils";
import Home from "../pages/Home";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={element}/>
            )}
            <Route path={'/*'} element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;