import Joi from "joi-browser";
import { toast } from "react-toastify";
import { CreateUser } from "../../model/userModel.js";
import * as userRepository from "../../repository/userRepository.js";
import * as authService from "../../service/authService.js";
import Form from "../common/Form.jsx";

export default class Register extends Form {
    state = {
        data: { username: "", password: "", confirmPassword: "", name: "" },
        errors: {},
    };

    schema = {
        username: Joi.string().email().required().label("Username"),
        password: Joi.string().required().label("Password").min(6),
        confirmPassword: Joi.string().required().label("Password Again").min(6),
        name: Joi.string().allow(null, "").label("Name"),
    };

    onSubmit = async () => {
        const user = this.state.data;
        const { status, log, token } = await userRepository.saveUser(
            new CreateUser(user.username, user.name, user.password)
        );
        if (log !== null) {
            toast(log);
            return;
        }
        if (status === 201) {
            authService.storeToken(token);
            // this.props.history.push("/");
            window.location = "/"; // full reload
            return;
        }
        toast("Unknown error");
    };

    render = () => {
        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("username", "Username", "email")}
                    {this.renderInput("name", "Name")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("confirmPassword", "Password Again", "password")}
                    {this.renderButton("Register")}
                </form>
            </div>
        );
    };
}
