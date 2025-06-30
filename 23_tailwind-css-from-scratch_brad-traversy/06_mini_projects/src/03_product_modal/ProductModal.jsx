import BottomButton from "./BottomButton.jsx";

const ProductModal = () => {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
            <div className="m-3 flex flex-col space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:m-0 md:flex-row md:space-y-0 md:space-x-10 md:p-16">
                <div className="">
                    <img
                        src="/images/03/headphone.png"
                        className="m-auto w-60 transition duration-200 hover:scale-110 md:m-0"
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
                        <div>
                            <div className="inline-block rounded-full bg-black py-1 px-3 text-sm text-white">
                                Free Shipping
                            </div>
                        </div>
                        <div className="max-w-sm text-2xl font-medium">
                            Razer Kraken Kitty Edt Gaming Headset Quartz
                        </div>
                        <div className="mb-4 flex flex-col space-y-3 text-center md:text-left">
                            <p className="line-through">$799</p>
                            <p className="text-5xl font-bold">$599</p>
                            <p className="text-sm font-light text-gray-400">
                                This offer is valid until April 3rd or as long
                                as stock lasts!
                            </p>
                        </div>
                        <div className="group">
                            <button className=" w-full rounded-lg border-b-8 border-b-blue-700 bg-blue-700 text-white transition-all duration-150 group-hover:border-b-0 group-hover:border-t-8 group-hover:border-t-blue-700 group-hover:shadow-lg">
                                <div className="rounded-lg bg-blue-500 px-8 py-4 duration-150 group-hover:bg-blue-700">
                                    Add to cart
                                </div>
                            </button>
                        </div>
                        <div className="group flex items-center space-x-3">
                            <div className="h-3 w-3 rounded-full bg-green-400 group-hover:animate-ping" />
                            <div className="text-sm">50+ pcs. in stock</div>
                        </div>
                        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                            <BottomButton src="/images/03/weight.png">
                                Add to cart
                            </BottomButton>
                            <BottomButton src="/images/03/heart.png">
                                Add to wishlist
                            </BottomButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
