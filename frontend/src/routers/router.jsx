import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [{
            path: "/",
            element: <Home/>
        },
        {
            path: "orders",
            element: <div>Service</div>
        },
        {
            path: "login",
            element: <Login />
        },
        {
            path: "register",
            element: <Register />
        },
        {
            path: "/cart",
            element: <Cart />
        },
        {
            path: "/checkout",
            element: <Checkout/>
        }
    ]
    }
])

export default router