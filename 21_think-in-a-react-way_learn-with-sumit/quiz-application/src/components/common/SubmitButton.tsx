import { FC } from "react";
import "./submitButton.css";

type Props = {
    loading: boolean;
};

const SubmitButton: FC<Props> = ({ loading }) => {
    return (
        <button type="submit" disabled={loading} className="button">
            <span>Submit now</span>
        </button>
    );
};

export default SubmitButton;
