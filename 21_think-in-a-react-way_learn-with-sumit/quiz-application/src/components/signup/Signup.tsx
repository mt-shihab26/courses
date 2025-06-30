import { FC } from "react";
import { Helmet } from "react-helmet-async";
import Illustration from "../common/Illustration";
import SingupForm from "./SignupForm";

const Singup: FC = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Signup - Quiz Application</title>
            </Helmet>
            <>
                <h1>Create an account</h1>
                <div className="column">
                    <Illustration src="/images/signup.svg" alt="signup" />
                    <SingupForm />
                </div>
            </>
        </>
    );
};

export default Singup;
