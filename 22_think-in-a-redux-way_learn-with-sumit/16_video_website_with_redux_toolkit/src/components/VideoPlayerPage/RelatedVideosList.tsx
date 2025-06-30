import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchVideos } from "../../features/videos/videosSlice";
import RelatedVideoItem from "./RelatedVideoItem";

type Props = {
    tags: string[];
    currentVideoId: number;
};

const RelatedVideosList = ({ tags, currentVideoId }: Props) => {
    const dispatch = useAppDispatch();

    const { videos } = useAppSelector(state => state.videos);

    const rVideos = videos.filter(video => {
        if (video.id === currentVideoId) return false;
        for (let t of tags) {
            for (let t2 of video.tags) {
                if (t === t2) return true;
            }
        }
        return false;
    });

    useEffect(() => {
        if (videos === null || videos.length === 0) {
            dispatch(fetchVideos());
            console.log("called", videos.length);
        }
    }, [videos]);

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {rVideos.map(video => (
                <RelatedVideoItem key={video.id} video={video} />
            ))}
        </div>
    );
};

export default RelatedVideosList;
