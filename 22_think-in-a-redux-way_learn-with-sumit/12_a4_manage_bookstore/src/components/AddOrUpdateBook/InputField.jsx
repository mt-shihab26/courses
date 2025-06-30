import PropTypes from "prop-types";

const InputField = ({ value, setFunc, label, id, name, className, type, ...rest }) => {
    return (
        <div className="space-y-2">
            <label htmlFor={id}>{label}</label>
            <input
                value={value}
                onChange={e => setFunc(e.target.value)}
                required
                className={className}
                type={type}
                id={id}
                name={name}
                {...rest}
            />
        </div>
    );
};

InputField.propTypes = {
    value: PropTypes.any.isRequired,
    setFunc: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    type: PropTypes.string,
};

InputField.defaultProps = {
    type: "text",
};

export default InputField;
