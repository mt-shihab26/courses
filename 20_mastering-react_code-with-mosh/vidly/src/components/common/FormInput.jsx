import PropTypes from "prop-types";

const FormInput = ({ name, label, error, ...rest }) => {
    return (
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
                className="form-control"
                autoFocus
                id={name}
                name={name}
                {...rest}
            />
            {error && <div className="alert alert-danger">{error}</div>}
        </div>
    );
};

FormInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default FormInput;
