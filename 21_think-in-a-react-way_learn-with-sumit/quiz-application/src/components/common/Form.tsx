import { FC, FormEventHandler, ReactNode } from "react";
import "./form.css";

type Props = {
    children: ReactNode;
    onSubmit: FormEventHandler<HTMLFormElement>;
    className: string;
};

const Form: FC<Props> = ({ children, onSubmit, className, ...rest }) => {
    return (
        <form className={`${className} form`} onSubmit={onSubmit} {...rest}>
            {children}
        </form>
    );
};

export default Form;
