const SocialIcon = ({img}) => {
    return (
        <a href="#">
            <img
                src={img}
                alt=""
                className="ficon rounded-full bg-dark-blue-0 p-2"
            />
        </a>
    );
};

export default SocialIcon;
