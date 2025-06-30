import { useGetVideosQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Video from "./Video";
import { nOfArr } from "../../utils/func";
import VideoLoader from "../ui/loaders/VideoLoader";
import { useEffect, useState } from "react";

const Videos = () => {
    const [request, setRequest] = useState(false);

    const {
        data: videos,
        isLoading,
        isError,
    } = useGetVideosQuery(undefined, {
        skip: !request,
        // pollingInterval: 3 * 1000,
    });

    useEffect(() => {
        setRequest(true);
    }, []);

    return (
        <>
            {isLoading ? (
                <>
                    {nOfArr(8).map((_, i) => (
                        <VideoLoader key={i} />
                    ))}
                </>
            ) : isError ? (
                <Error message="There was an error occured!" />
            ) : !videos || videos.length === 0 ? (
                <Error message="There was no videos" />
            ) : (
                videos.map(video => <Video key={video.id} video={video} />)
            )}
        </>
    );
};

export default Videos;
