const FeatureRow = ({ children, className }) => {
    return (
        <div
            className={
                "flex flex-col space-y-24 text-center md:flex-row md:space-y-0 " +
                className
            }
        >
            {children}
        </div>
    );
};

export default FeatureRow;
