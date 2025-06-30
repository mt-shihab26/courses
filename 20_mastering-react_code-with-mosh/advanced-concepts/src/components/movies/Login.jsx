import React from "react";
import { useContext } from "react";
import UserContext from "../../contexts/userContext";

const Login = () => {
    const { setUser } = useContext(UserContext);

    const handleLogin = () => {
        setUser({ name: "Shihab 2" });
    };

    return <div onClick={handleLogin}>Login</div>;
};

export default Login;
