import { FC } from "react";
import "./video.css";

const Video: FC = () => {
    return (
        <a href="quiz.html">
            <div className="video">
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className="qmeta">
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </a>
    );
};

export default Video;
