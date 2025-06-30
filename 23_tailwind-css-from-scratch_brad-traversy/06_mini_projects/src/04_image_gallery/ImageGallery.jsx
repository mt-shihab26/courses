import ImageGroup from "./ImageGroup.jsx";
import NavLink from "./NavLink.jsx";
import SearchSVG from "./SearchSVG.jsx";

const ImageGallery = () => {
    const images = [];
    for (let i = 1; i <= 6; i++) {
        images.push({
            src: `image${i}.jpg`,
            alt: "Abstract Painting",
            likeCount: 245,
            shareCount: 30,
        });
    }
    console.log(images);

    return (
        <div className="flex min-h-screen items-center justify-center bg-cyan-50">
            <div className="m-3 space-y-10 rounded-3xl  bg-white  p-6 shadow-2xl md:p-40">
                <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:justify-end md:space-y-0 md:space-x-8">
                    <NavLink>Vector</NavLink>
                    <NavLink>Illustrations</NavLink>
                    <NavLink>Images</NavLink>
                    <NavLink src="/icons">Icons</NavLink>
                </div>
                <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
                    <div className="flex justify-between border-b">
                        <input
                            type="text"
                            className="ml-6 border-none placeholder:font-thin focus:outline-none md:w-80"
                            placeholder="Search"
                        />
                        <button>
                            <SearchSVG />
                        </button>
                    </div>
                    <button className="rounded-md border-black bg-black py-3 px-14 text-lg font-normal text-white shadow-2xl duration-200 hover:bg-white hover:text-black">
                        Upload
                    </button>
                </div>
                <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                    {images.map(image => (
                        <ImageGroup
                            src={`images/04/${image.src}`}
                            alt={image.alt}
                            likeCount={image.likeCount}
                            shareCount={image.shareCount}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageGallery;
