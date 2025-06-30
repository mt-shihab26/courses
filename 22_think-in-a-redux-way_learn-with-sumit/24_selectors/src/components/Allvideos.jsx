import { useSelector } from "react-redux";
import { selectFilter } from "../features/filters/filterSelectors";
import VideoItem from "./VideoItem";
import {
    selectAllVideos,
    selectMemoizeUnWatchVideos,
    selectMemoizeWatchVideos,
} from "./../features/videos/videoSelectors";

export default function AllVideos() {
    const filter = useSelector(selectFilter);

    const videos = useSelector(state => {
        if (filter === "all") return selectAllVideos(state);
        else if (filter === true) return selectMemoizeWatchVideos(state);
        else return selectMemoizeUnWatchVideos(state);
    });

    console.log("[AllVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {videos.map(video => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
