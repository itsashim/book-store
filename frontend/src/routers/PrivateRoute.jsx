import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"


function PrivateRoute({children}) {
    const {currentUser} =  useAuth();
    console.log(currentUser,"This is private route");
    if(currentUser){
        return children
    }else{
         return <Navigate to="/login" replace/>
    }
}



export default PrivateRoute
