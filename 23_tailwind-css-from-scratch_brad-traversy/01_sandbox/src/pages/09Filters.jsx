const Filters = () => {
    return (
        <div>
            <div>
                {/* Blur */}
                <div className="blur-none">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                <div className="blur-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                <div className="blur">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                <div className="blur-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                <div className="blur-none">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                <img className="blur" src="/img/img1.jpg" />
                <div className="blur-none">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Illum, odit!
                </div>
                {/* Brightness */}
                <img className="brightness-0" src="/img/img2.jpg" />
                <img className="brightness-50" src="/img/img2.jpg" />
                <img className="brightness-75" src="/img/img2.jpg" />
                <img className="brightness-100" src="/img/img2.jpg" />
                <img className="brightness-150" src="/img/img2.jpg" />
                <img className="brightness-200" src="/img/img2.jpg" />
                {/* Contrast */}
                <img className="contrast-0" src="/img/img3.jpg" />
                <img className="contrast-50" src="/img/img3.jpg" />
                <img className="contrast-100" src="/img/img3.jpg" />
                <img className="contrast-150" src="/img/img3.jpg" />
                <img className="contrast-200" src="/img/img3.jpg" />
                {/* Grayscale */}
                <img className="grayscale" src="/img/img4.jpg" />
                <img className="grayscale-0" src="/img/img4.jpg" />
                {/* Invert */}
                <img className src="/img/img5.jpg" />
                <img className="invert" src="/img/img5.jpg" />
                <img className="invert-0" src="/img/img5.jpg" />
                {/* Sepia */}
                <img className src="/img/img6.jpg" />
                <img className="sepia" src="/img/img6.jpg" />
                <img className="sepia-0" src="/img/img6.jpg" />
                {/* Hue Rotate */}
                <img className src="/img/img7.jpg" />
                <img className="hue-rotate-15" src="/img/img7.jpg" />
                <img className="hue-rotate-30" src="/img/img7.jpg" />
                <img className="hue-rotate-60" src="/img/img7.jpg" />
                <img className="hue-rotate-90" src="/img/img7.jpg" />
                <img className="hue-rotate-180" src="/img/img7.jpg" />
            </div>
        </div>
    );
};

export default Filters;
