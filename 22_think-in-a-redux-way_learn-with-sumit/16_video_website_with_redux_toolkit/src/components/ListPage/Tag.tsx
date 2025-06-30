import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { removeSelectedTag, setSelectedTag } from "../../features/filter/filterSlice";

const Tag = ({ tag }: { tag: string }) => {
    const dispatch = useAppDispatch();

    const { selectedTags } = useAppSelector(state => state.filter);

    const isSelected = selectedTags.includes(tag);

    const handleClick = () => {
        if (isSelected) {
            dispatch(removeSelectedTag(tag));
        } else {
            dispatch(setSelectedTag(tag));
        }
    };

    return (
        <div
            onClick={handleClick}
            className={`${
                isSelected ? "bg-blue-600 text-white" : "bg-blue-100 text-blue-600"
            } px-4 py-1 rounded-full cursor-pointer`}
        >
            {tag}
        </div>
    );
};

export default Tag;
