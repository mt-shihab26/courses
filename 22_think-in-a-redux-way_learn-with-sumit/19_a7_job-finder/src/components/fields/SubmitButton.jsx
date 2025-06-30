const SubmitButton = ({ label }) => {
    return (
        <div className="text-right">
            <button
                type="submit"
                id="lws-submit"
                className="cursor-pointer btn btn-primary w-fit"
            >
                {label}
            </button>
        </div>
    );
};

export default SubmitButton;
