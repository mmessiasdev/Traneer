import { useContext } from "react"
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import AuthContext from "../../auth/context/authContext";

const AuthPrivate = ({ path, component }) => {
    const { isAuthenticated } = useContext(AuthContext);
    const location = useLocation()

    if (isAuthenticated) {
        return <Routes>
            <Route path={path} component={component} />
        </Routes>

    } else if (!isAuthenticated && location.pathname === "/") {
        return <Navigate to="/" />;

    } else {
        return <Navigate to="/" />;
    }
}

export default AuthPrivate;