import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { Video } from "../../features/types";
import { fetchVideos } from "../../features/videos/videosSlice";
import { useAppDispatch } from "../../hooks/common";
import Loading from "../common/Loading/Loading";
import VideoCard from "./VideoCard";

// const filterBySearch = (searchString: string, videos: Video[]) => {
//     if (searchString === "") return videos;
//     return videos.filter(video => {
//         return video.title.toLowerCase().includes(searchString.toLowerCase());
//     });
// };

// const filterVideosByTags = (tags: string[], videos: Video[]) => {
//     if (tags.length === 0) return videos;
//     return videos.filter(video => {
//         for (let t of video.tags) {
//             for (let t2 of tags) {
//                 if (t === t2) return true;
//             }
//         }
//         return false;
//     });
// };

const VideoGird = () => {
    const dispatch = useAppDispatch();

    const { isLoading, isError, error, videos } = useAppSelector(state => state.videos);
    const { searchString, selectedTags } = useAppSelector(state => state.filter);

    // const searchedVideos = filterBySearch(searchString, videos);
    // const filteredVideos = filterVideosByTags(selectedTags, searchedVideos);

    useEffect(() => {
        dispatch(fetchVideos({ searchString, selectedTags }));
    }, [searchString, selectedTags]);

    return (
        <section className="pt-12">
            <section className="pt-12">
                <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
                    {isLoading ? (
                        <Loading />
                    ) : isError ? (
                        <div className="col-span-12 text-red-500">{error}</div>
                    ) : (
                        videos.map(video => <VideoCard key={video.id} video={video} />)
                    )}
                </div>
            </section>
        </section>
    );
};

export default VideoGird;
