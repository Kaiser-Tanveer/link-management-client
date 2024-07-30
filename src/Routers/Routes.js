import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/NotFound/NotFound";
import Register from "../Auth/Register";
import Login from "../Auth/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import Home from "../Dashboard/Home/Home";

const routes = createBrowserRouter([
    {
        path: "*",
        element: <NotFound/>
    },
    {
        path: "/reg",
        element: <Register/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/",
        element: <MainLayout/>
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "/dashboard",
                element: <Home/>
            }
        ]
    }
])

export default routes;