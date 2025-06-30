import { ChangeEventHandler, FC } from "react";

type Props = {
    onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox: FC<Props> = ({ onChange }) => {
    return (
        <label>
            <input required type="checkbox" onChange={onChange} />
            <span style={{ marginLeft: 5 }}>I agree to the Terms &amp; Conditions</span>
        </label>
    );
};

export default Checkbox;
