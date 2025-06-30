import { FC, useState } from "react";

const ProgressBar: FC = () => {
    const barWidth = "20";
    const [mouseOver, setMouseOver] = useState(false);

    return (
        <div className="progressBar">
            <div className="backButton">
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className="rangeArea">
                <div className="tooltip" style={{ display: mouseOver ? "block" : "none" }}>
                    24% Complete!
                </div>
                <div className="rangeBody">
                    <div
                        className="progress"
                        onMouseOver={() => setMouseOver(true)}
                        onMouseOut={() => setMouseOver(false)}
                        style={{ width: `${barWidth}%` }}
                    />
                </div>
            </div>
            <a href="result.html">
                <button className="button next">
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </button>
            </a>
        </div>
    );
};

export default ProgressBar;
