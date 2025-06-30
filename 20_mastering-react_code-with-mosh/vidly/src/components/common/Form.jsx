import { Component } from "react";
import * as validationService from "../../service/validation.js";
import FormInput from "../common/FormInput.jsx";
import Select from "./Select.jsx";

export default class Form extends Component {
    state = {
        data: {},
        errors: {},
    };
    schema = {};

    handleSubmit = e => {
        e.preventDefault();

        const { data } = this.state;

        const errors = validationService.validate(data, this.schema);
        if (errors) {
            this.setState({ errors });
            return;
        }

        this.onSubmit();
    };

    handleChange = ({ currentTarget }) => {
        const { name, value } = currentTarget;
        const { errors, data } = this.state;

        const newData = { ...data };
        newData[name] = value;
        this.setState({ data: newData });

        const newErrors = validationService.validateProperty(
            name,
            value,
            this.schema,
            errors
        );
        if (name === "confirmPassword" && newData.confirmPassword !== newData.password) {
            newErrors[name] = "Passwords not matching";
        }
        this.setState({ errors: newErrors });
    };

    renderButton = label => {
        const { data } = this.state;
        return (
            <button
                disabled={validationService.validate(data, this.schema)}
                type="submit"
                className="btn btn-danger"
            >
                {label}
            </button>
        );
    };

    renderInput = (name, label, type = "text") => {
        const { data, errors } = this.state;
        return (
            <FormInput
                name={name}
                label={label}
                type={type}
                value={data[name]}
                error={errors[name]}
                onChange={this.handleChange}
            />
        );
    };

    renderSelect = (name, label, options) => {
        const { data, errors } = this.state;
        return (
            <Select
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
                error={errors[name]}
            />
        );
    };
}
