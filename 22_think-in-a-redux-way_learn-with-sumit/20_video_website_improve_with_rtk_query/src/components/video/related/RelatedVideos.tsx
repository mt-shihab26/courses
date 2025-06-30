import { useParams } from "react-router-dom";
import { useGetRelatedVideosQuery } from "../../../features/api/apiSlice";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader";
import RelatedVideo from "./RelatedVideo";
import Error from "../../ui/Error";
import { nOfArr } from "../../../utils/func";

type Props = {
    title: string;
};

const RelatedVideos = ({ title }: Props) => {
    const { videoId } = useParams();
    const {
        data: relatedVideos,
        isLoading,
        isError,
    } = useGetRelatedVideosQuery({ id: Number(videoId), title });

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {isLoading ? (
                <>
                    {nOfArr(4).map((_, i) => (
                        <RelatedVideoLoader key={i} />
                    ))}
                </>
            ) : isError ? (
                <Error message="There was an error occured!" />
            ) : !relatedVideos || relatedVideos.length === 0 ? (
                <Error message="No related videos found" />
            ) : (
                <>
                    {relatedVideos.map(video => (
                        <RelatedVideo key={video.id} video={video} />
                    ))}
                </>
            )}
        </div>
    );
};

export default RelatedVideos;
