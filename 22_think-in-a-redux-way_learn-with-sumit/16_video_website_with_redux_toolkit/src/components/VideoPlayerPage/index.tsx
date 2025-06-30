import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchVideo } from "../../features/video/videoSlice";
import Loading from "../common/Loading/Loading";
import Description from "./Description";
import Player from "./Player";
// import RelatedVideosList from "./RelatedVideosList";
import RelatedVideosListSumit from "./RelatedVideosListSumit";

const VideoPlayerPage = () => {
    const dispatch = useAppDispatch();

    const { videoId } = useParams();
    const { video, isLoading, isError, error } = useAppSelector(state => state.video);

    useEffect(() => {
        dispatch(fetchVideo(Number(videoId)));
    }, [videoId]);

    return (
        <section className="pt-6 pb-20">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    {isLoading ? (
                        <Loading />
                    ) : isError || !video ? (
                        <div className="col-span-12 text-red-500">{error}</div>
                    ) : (
                        <>
                            <div className="col-span-full w-full space-y-8 lg:col-span-2">
                                <Player link={video.link} title={video.title} />
                                <Description video={video} />
                            </div>
                            <RelatedVideosListSumit
                                currentVideoId={video.id}
                                tags={video.tags}
                            />
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default VideoPlayerPage;
