import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { fetchRelatedVideos } from "../../features/relatedVideos/relatedVideosSlice";
import Loading from "../common/Loading/Loading";
import RelatedVideoItem from "./RelatedVideoItem";

type Props = {
    tags: string[];
    currentVideoId: number;
};

const RelatedVideosListSumit = ({ tags, currentVideoId }: Props) => {
    const dispatch = useAppDispatch();

    const { relatedVideos, isLoading, isError, error } = useAppSelector(
        state => state.relatedVideos
    );

    useEffect(() => {
        dispatch(fetchRelatedVideos({ tags, id: currentVideoId }));
    }, [currentVideoId, tags]);

    return (
        <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {isLoading ? (
                <Loading />
            ) : isError || relatedVideos.length === 0 ? (
                <div className="col-span-12 text-red-500">{error}</div>
            ) : (
                <>
                    {relatedVideos.map(video => (
                        <RelatedVideoItem key={video.id} video={video} />
                    ))}
                </>
            )}
        </div>
    );
};

export default RelatedVideosListSumit;
