import { useSelector } from "react-redux";

const Button = () => {
    const flightBooks = useSelector(state => state.flightBooks);
    return (
        <button
            className="addCity"
            type="submit"
            disabled={flightBooks.length === 3 ? true : false}
            id="lws-addCity"
        >
            <svg
                width="15px"
                height="15px"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                />
            </svg>
            <span className="text-sm">Book</span>
        </button>
    );
};

export default Button;
