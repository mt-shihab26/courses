import Joi from "joi-browser";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginUser } from "../../model/userModel.js";
import * as userRepository from "../../repository/userRepository.js";
import * as authService from "../../service/authService.js";
import Form from "../common/Form.jsx";

export default class Login extends Form {
    state = {
        data: { username: "", password: "" },
        errors: { username: "", password: "" },
    };

    schema = {
        username: Joi.string().required().min(4).max(32).label("Username"),
        password: Joi.string().required().min(6).max(24).label("Password"),
    };

    onSubmit = async () => {
        const { data } = this.state;
        const { token, log, status } = await userRepository.loginUser(
            new LoginUser(data.username, data.password)
        );
        if (log !== null) {
            toast(log);
            return;
        }
        if (status === 201) {
            authService.storeToken(token);
            const { state } = this.props.location;
            window.location = state ? state.from.pathname : "/";
            return;
        }
        toast("Unknown error");
    };

    render = () => {
        const token = authService.getToken();
        return token ? (
            <Redirect to="/" />
        ) : (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        );
    };
}
