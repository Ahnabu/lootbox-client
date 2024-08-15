import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Components/Authentication/LogIn/LogIn";
import Register from "../Components/Authentication/Register/Register";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },

]);
export default router