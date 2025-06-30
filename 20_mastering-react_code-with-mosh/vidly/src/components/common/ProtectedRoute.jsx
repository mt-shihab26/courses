import { Route, Redirect } from "react-router-dom";
import * as authService from "../../service/authService";

const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
    const isLogin = authService.getToken() ? true : false;
    return (
        <Route
            path={path}
            render={props => {
                console.log(props);
                if (isLogin) {
                    return Component ? <Component {...props} /> : render(props);
                } else {
                    return (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: props.location },
                            }}
                        />
                    );
                }
            }}
            {...rest}
        />
    );
};

export default ProtectedRoute;
