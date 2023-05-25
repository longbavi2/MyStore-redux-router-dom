import Layout from "../Layout";
import Cart from "../components/cart";
import Home from "../components/home";

export const Routes = [
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path: "/",
                element:<Home/> 
            },
            {
                path: "cart",
                element:<Cart/> 
            }
        ]
    }
]