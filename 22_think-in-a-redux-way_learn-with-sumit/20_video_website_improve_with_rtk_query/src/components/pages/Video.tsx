import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../features/api/apiSlice";
import { nOfArr } from "../../utils/func";
import Error from "../ui/Error";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import RelatedVideoLoader from "../ui/loaders/RelatedVideoLoader";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";

const Video = () => {
    const { videoId } = useParams();

    const { data: video, isLoading, isError } = useGetVideoQuery(Number(videoId));

    return (
        <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
            <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                <div className="grid grid-cols-3 gap-2 lg:gap-8">
                    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                        {isLoading ? (
                            <>
                                <PlayerLoader />
                                <DescriptionLoader />
                            </>
                        ) : isError ? (
                            <Error message="There was an error occured!" />
                        ) : !video || !video?.id ? (
                            <Error message="There was no video" />
                        ) : (
                            <>
                                <Player src={video.link} title={video.title} />
                                <Description
                                    title={video.title}
                                    date={video.date}
                                    id={video.id}
                                    description={video.description}
                                />
                            </>
                        )}
                    </div>

                    {isLoading ? (
                        <>
                            {nOfArr(4).map((_, i) => (
                                <RelatedVideoLoader key={i} />
                            ))}
                        </>
                    ) : isError ? (
                        <Error message="There was an error occured!" />
                    ) : !video || !video?.id ? (
                        <Error message="There was no video" />
                    ) : (
                        <RelatedVideos title={video.title} />
                    )}
                </div>
            </div>
        </section>
    );
};

export default Video;
