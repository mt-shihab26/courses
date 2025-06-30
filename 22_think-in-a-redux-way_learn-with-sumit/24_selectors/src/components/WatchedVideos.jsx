import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectMemoizeFilteredVideos } from "../features/videos/videoSelectors";
import VideoItem from "./VideoItem";

export default function WatchedVideos() {
    // const watchedVideos = useSelector(
    //     state => state.videos.videos.filter(v => v.watched),
    //     shallowEqual
    // );

    // my solution
    // const videos = useSelector(state => state.videos.videos);
    // const watchedVideos = videos.filter(v => v.watched);

    // const watchedVideos = useSelector(selectMemoizeWatchVideos);
    // const watchedVideos = useSelector(state =>
    //     selectMemoizeFilteredVideos(state, true)
    // );

    const selectFilteredVideos = useMemo(selectMemoizeFilteredVideos, []);

    const watchedVideos = useSelector(state =>
        selectFilteredVideos(state, true)
    );

    console.log("[WatchedVideos] renders");

    return (
        <div>
            <ul className="divide-y divide-slate-200">
                {watchedVideos.map(video => (
                    <VideoItem key={video.id} video={video} />
                ))}
            </ul>
        </div>
    );
}
