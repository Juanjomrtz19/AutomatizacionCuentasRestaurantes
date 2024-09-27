import { createBrowserRouter } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Home from "../pages/Home";
import About, { loaderUser } from "../pages/About"
import NotFound from "../pages/NotFound";
import LayoutPublic from "../layout/LayoutPublic";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <Home/>,
        errorElement: <NotFound />,
    },
    {
        path: '/',
        element: <LayoutPublic/>,
        errorElement: <NotFound />,
        children: [
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/login",
                element: <LogIn/>
            },
            {
                path: "/register",
                element: <Register/>
            }
        ]
    },
]);