import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { removeSelectedTag, setSelectedTag } from "../../features/filter/filterSlice";
import { fetchTags } from "../../features/tags/tagsSlice";
import { useAppDispatch } from "../../hooks/common";
import Tag from "./Tag";

const Tags = () => {
    const dispatch = useAppDispatch();

    const { isLoading, isError, tags } = useAppSelector(state => state.tags);

    useEffect(() => {
        dispatch(fetchTags());
    }, []);

    return (
        <>
            {!isLoading && !isError && tags?.length > 0 ? (
                <section>
                    <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
                        {tags.map(tag => (
                            <Tag key={tag.id} tag={tag.title} />
                        ))}
                    </div>
                </section>
            ) : (
                <></>
            )}
        </>
    );
};

export default Tags;
