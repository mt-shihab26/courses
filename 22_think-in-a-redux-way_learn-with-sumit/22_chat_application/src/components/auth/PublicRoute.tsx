import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useIsLoggedIn from "../../hooks/useIsLoggedIn";

const PublicRoute: any = ({
    children,
}: {
    children: ReactNode;
    to: string;
}) => {
    const isLoggedIn = useIsLoggedIn();

    return !isLoggedIn ? children : <Navigate to="/inbox" />;
};

export default PublicRoute;
