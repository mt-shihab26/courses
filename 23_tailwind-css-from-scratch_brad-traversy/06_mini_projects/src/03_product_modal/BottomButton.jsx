const BottomButton = ({ children, src }) => {
    return (
        <button className="flex items-center justify-center space-x-3 rounded-lg border-2 border-gray-300 py-3 px-5 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-opacity-30 hover:shadow-lg">
            <img className="w-8" src={src} alt={children} />
            <span>{children}</span>
        </button>
    );
};

export default BottomButton;
