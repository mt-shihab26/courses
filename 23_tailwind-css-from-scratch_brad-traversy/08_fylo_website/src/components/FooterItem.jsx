const FooterItem = ({ img, content }) => {
    return (
        <div className="flex items-center space-x-3 md:mt-10">
            <div className="w-6">
                <img src={img} alt="" className="scale-10" />
            </div>
            <div>{content}</div>
        </div>
    );
};

export default FooterItem;
