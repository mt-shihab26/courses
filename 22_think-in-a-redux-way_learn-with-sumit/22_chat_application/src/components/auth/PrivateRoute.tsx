import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

const PrivateRoute: any = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useIsLoggedIn();

    return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;
