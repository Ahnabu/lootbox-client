import { createBrowserRouter } from "react-router-dom";
import LogIn from "../Components/Authentication/LogIn/LogIn";
import Register from "../Components/Authentication/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogIn/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
]);
export default router