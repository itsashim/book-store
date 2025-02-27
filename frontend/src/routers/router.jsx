import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Cart from "../pages/books/Cart";
import Checkout from "../pages/books/Checkout";
import BookDetails from "../pages/books/BookDetails";
import PrivateRoute from "./PrivateRoute";
import Orders from "../pages/orders/Orders";
import AdminLogin from "../admin/auth/AdminLogin";
import AdminRoute from "./AdminRoute";

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
            element: <PrivateRoute>
                <Orders></Orders>
            </PrivateRoute>
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
            element: <PrivateRoute><Checkout/></PrivateRoute>
        },
        {
            path: "/book/:id",
            element: <BookDetails/>
        }
    ]
    },
    {
        path: "/admin/login",
        element: <AdminLogin/>
    },
    {
        path: "/dashboard",
        element: <AdminRoute>Dashboard <Outlet/></AdminRoute>,
        children: [{
                path: "books",
                element: <div>All books</div>
            },
            {
                path: "add-book",
                element: <div>All books</div>
            },]
    }
])

export default router