import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
    const token = localStorage.getItem('token');

    return token ? children : <Navigate to="/admin/login" />;
}

export default AdminRoute;
