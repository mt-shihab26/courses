const ColumnsLayouts = () => {
    return (
        <div>
            {/* Columns */}
            <div className="columns-4 gap-1">
                <img className="w-full" src="/img/img1.jpg" />
                <img className="w-full" src="/img/img2.jpg" />
                <img className="w-full" src="/img/img3.jpg" />
                <img className="w-full" src="/img/img4.jpg" />
            </div>
            <div className="columns-xs gap-1">
                <img className="w-full" src="/img/img1.jpg" />
                <img className="w-full" src="/img/img2.jpg" />
                <img className="w-full" src="/img/img3.jpg" />
                <img className="w-full" src="/img/img4.jpg" />
            </div>
            {/* Aspect Radio */}
            <div className="columns-4">
                <img className="w-full aspect-video" src="/img/img1.jpg" />
                <img className="w-full aspect-square" src="/img/img2.jpg" />
                <img className="w-full" src="/img/img3.jpg" />
                <img className="w-full" src="/img/img4.jpg" />
            </div>
        </div>
    );
};

export default ColumnsLayouts;
