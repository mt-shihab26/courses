const TestimonialCart = ({ text, img, name, position }) => {
    return (
        <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-dark-blue-3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">{text}</p>
            <div className="flex space-x-4">
                <img src={img} alt="" className="h-10 w-10 rounded-full" />
                <div>
                    <h5 className="text-sm font-semibold">{name}</h5>
                    <p className="text-xs font-extralight">{position}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCart;
