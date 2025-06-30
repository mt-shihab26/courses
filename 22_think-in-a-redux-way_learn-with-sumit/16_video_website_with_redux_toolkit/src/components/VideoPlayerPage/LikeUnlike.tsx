import { useAppDispatch } from "../../hooks/common";
import likeImage from "./../../assets/like.svg";
import unlikeImage from "./../../assets/unlike.svg";

type Props = {
    id: number;
    likes: number;
    unlikes: number;
};

const LikeUnlike = ({ id, likes, unlikes }: Props) => {
    const dispatch = useAppDispatch();

    const handleLike = () => {
        // dispatch(incrementLike(id));
    };

    const handleUnlike = () => {
        // dispatch(decrementLike(id));
    };

    return (
        <div className="flex gap-10 w-48">
            <div className="flex gap-1">
                <div className="shrink-0" onClick={handleLike}>
                    <img className="w-5 block" src={likeImage} alt="Like" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">{likes}</div>
            </div>
            <div className="flex gap-1">
                <div className="shrink-0" onClick={handleUnlike}>
                    <img className="w-5 block" src={unlikeImage} alt="Unlike" />
                </div>
                <div className="text-sm leading-[1.7142857] text-slate-600">
                    {unlikes}
                </div>
            </div>
        </div>
    );
};

export default LikeUnlike;
