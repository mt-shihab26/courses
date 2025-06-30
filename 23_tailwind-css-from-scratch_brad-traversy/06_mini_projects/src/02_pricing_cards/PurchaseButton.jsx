const PurchaseButton = ({ selected }) => {
    return (
        <div className="flex justify-center">
            <a
                href="#"
                className={`my-6 mt-4 inline-block  rounded-lg border border-violet-600 px-10 py-3 text-center duration-200 hover:border-violet-800 hover:bg-violet-800 ${
                    selected === true && "bg-violet-600"
                }`}
                type="button"
            >
                Purchase
            </a>
        </div>
    );
};

export default PurchaseButton;
