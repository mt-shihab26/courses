import { FC } from "react";
import { Helmet } from "react-helmet-async";
import Illustration from "../common/Illustration";
import LoginForm from "./LoginForm";

const Login: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login - Quiz Application</title>
            </Helmet>
            <>
                <h1>Login to your account</h1>
                <div className="column">
                    <Illustration src="/images/login.svg" alt="signup" />
                    <LoginForm />
                </div>
            </>
        </>
    );
};

export default Login;
