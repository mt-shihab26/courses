import { FC } from "react";
import "./illustration.css";

const Illustration: FC<{ src: string; alt: string }> = ({ src, alt }) => {
    return (
        <div className="illustration">
            <img src={src} alt={alt} />
        </div>
    );
};

export default Illustration;
