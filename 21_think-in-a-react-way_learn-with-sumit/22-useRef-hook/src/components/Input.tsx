import { forwardRef } from "react";

type Props = {
    type: string;
    placeholder: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
    ({ type, placeholder }, ref) => {
        return (
            <div>
                <input type={type} ref={ref} placeholder={placeholder} />
            </div>
        );
    }
);

export default Input;
