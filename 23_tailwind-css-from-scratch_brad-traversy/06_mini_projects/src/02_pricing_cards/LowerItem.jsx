import CheckIcon from "./CheckIcon.jsx";

const LowerItem = ({ children }) => {
    return (
        <div className="flex justify-center">
            <CheckIcon />
            <span className="ml-1 text-sm">{children}</span>
        </div>
    );
};

export default LowerItem;
