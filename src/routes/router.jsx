import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Program from "../pages/Program";
import Service from "../pages/Service";
import Blog from "../pages/Blog";
export const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
          
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"about",
                element:<About />
            },
            {
              path:"service",
              element: <Service />  
            },
            
            {
              path:"blog",
              element: <Blog />  
            },
            {
                path:"program",
                element:<Program />
            }
        ]
    }
])