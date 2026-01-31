import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About";
import Program from "../pages/Program";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
import Home from "../Home";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          
            {
                path:"/",
                element:<Home/>
            },
        ]
    }
])