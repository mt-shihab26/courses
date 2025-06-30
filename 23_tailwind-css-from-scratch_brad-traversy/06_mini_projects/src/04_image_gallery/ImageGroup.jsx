const ImageGroup = ({ src, alt, likeCount, shareCount }) => {
    return (
        <div className="group relative">
            <img src={src} alt={alt} className="w-72" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 p-2 px-4 text-white opacity-0 duration-500 group-hover:opacity-100">
                <div className="flex w-full justify-between">
                    <div className="font-normal">
                        <p className="text-sm">{alt}</p>
                        <p className="text-xs">{`${likeCount} likes - ${shareCount} shares`}</p>
                    </div>
                    <div className="flex items-center">
                        <img src="./images/04/bookmark.svg" alt="bookmark" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageGroup;
