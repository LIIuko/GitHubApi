import About from "../pages/About";
import Projects from "../pages/Projects";
import Home from "../pages/Home";

export const routes = [
    {path: "/about", element: <About/>, title: "About"},
    {path: "/projects", element: <Projects/>, title: "Projects"},
    {path: "/home", element: <Home/>, title: "Home"},
]