import type { FC } from "react";
import { useEffect, useRef } from "react";
import Input from "./Input";

type Props = {};

const Form: FC<Props> = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <Input type="text" ref={inputRef} placeholder="Enter something" />
        </div>
    );
};

export default Form;
