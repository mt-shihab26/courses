import { FC, useState } from "react";

const MiniPlayer: FC = () => {
    const [isPlayerOpen, setIsPlayerOpen] = useState(false);

    return (
        <>
            <div
                className={`miniPlayer ${!isPlayerOpen && "floatingBtn"}`}
                onClick={() => setIsPlayerOpen(!isPlayerOpen)}
            >
                <span className="material-icons-outlined open"> play_circle_filled </span>
                <span
                    className="material-icons-outlined close"
                    onClick={() => setIsPlayerOpen(!isPlayerOpen)}
                >
                    close
                </span>
                <img src="./images/3.jpg" alt="" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            </div>
        </>
    );
};

export default MiniPlayer;
