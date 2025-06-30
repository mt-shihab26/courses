import { ChangeEventHandler } from "react";

type Props = {
    title: string;
    name: string;
    value: any;
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = ({ title, name, value, onChange }: Props) => {
    return (
        <>
            <label className="block text-sm font-medium text-gray-700">{title}</label>
            <input
                type="text"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                name={name}
                value={value}
                onChange={onChange}
            />
        </>
    );
};

export default TextInput;
