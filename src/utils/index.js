import About from "../pages/About";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Search from "../pages/Search";

export const routes = [
    {path: "/about", element: <About/>, title: "About"},
    {path: "/projects", element: <Projects/>, title: "Projects"},
    {path: "/search", element: <Search/>, title: "Search"},

]

export const routeHome = {path: "/home", element: <Home/>, title: "Home"}