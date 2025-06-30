import { useDispatch } from "react-redux";
import { updateLike, updateSaved } from "../../features/post/postSlice";
import Tags from "../common/Tags";

const PostDetails = ({ post }) => {
    const dispatch = useDispatch();

    const { id, title, image, tags, likes, isSaved, createdAt, description } = post;

    const handleClickLike = () => {
        dispatch(updateLike({ postId: id, likes }));
    };

    const handleClickSave = () => {
        dispatch(updateSaved({ postId: id, isSaved }));
    };

    return (
        <main className="post">
            <img
                src={image}
                alt="githum"
                className="w-full rounded-md"
                id="lws-megaThumb"
            />
            <div>
                <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
                    {title}
                </h1>
                <div className="tags" id="lws-singleTags">
                    {tags && tags.length > 0 && <Tags tags={tags} />}
                </div>
                <div className="btn-group">
                    <button
                        onClick={handleClickLike}
                        className="like-btn"
                        id="lws-singleLinks"
                    >
                        <i className="fa-regular fa-thumbs-up" /> {likes}
                    </button>
                    <button
                        onClick={handleClickSave}
                        className={`${isSaved ? "active" : ""} save-btn`}
                        id="lws-singleSavedBtn"
                    >
                        <i className="fa-regular fa-bookmark" />{" "}
                        {isSaved ? "Saved" : "Save"}
                    </button>
                </div>
                <div className="mt-6">
                    <p>{description}</p>
                </div>
            </div>
        </main>
    );
};

export default PostDetails;
