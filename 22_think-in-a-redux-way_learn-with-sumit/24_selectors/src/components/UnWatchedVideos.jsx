import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoizeFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

const UnWatchedVideos = () => {
    const selectFilteredVideos = useMemo(selectMemoizeFilteredVideos, []);

    const unWatchedVideos = useSelector(state =>
        selectFilteredVideos(state, false)
    );

    console.log("[UnWatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {unWatchedVideos.map(video => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
};

export default UnWatchedVideos;
