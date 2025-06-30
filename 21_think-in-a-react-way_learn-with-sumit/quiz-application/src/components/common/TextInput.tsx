import { ChangeEventHandler, FC } from "react";
import "./textInput.css";

type Props = {
    type?: string;
    placeholder: string;
    icon: string;
    name: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
    value: string;
};

const TextInput: FC<Props> = ({ placeholder, icon, name, onChange, type = "text" }) => {
    return (
        <div className="textInput">
            <input name={name} type={type} placeholder={placeholder} onChange={onChange} />
            <span className="material-icons-outlined">{icon}</span>
        </div>
    );
};

export default TextInput;
