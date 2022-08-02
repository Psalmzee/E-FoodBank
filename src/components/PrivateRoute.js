import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, ...otherProps}) => {
    const isAuth = localStorage.getItem('auth')
    return (
        <div className="">
            { isAuth ? children : <Navigate to="/login" /> }
        </div>
    );
}
 
export default PrivateRoute;