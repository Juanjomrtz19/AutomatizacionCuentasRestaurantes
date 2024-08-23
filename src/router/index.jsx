import { createBrowserRouter } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About"
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
        errorElement: <NotFound />,
    },
    {
        path: "/about",
        element: <About />,
        errorElement: <NotFound />,
    },
]);