import { Link } from "react-router-dom";
import Tags from "../common/Tags";

const PostCard = ({ post }) => {
    const { id, title, image, tags, likes, isSaved, createdAt } = post;

    return (
        <div className="lws-card">
            <Link to={`/posts/${id}`}>
                <img src={image} className="lws-card-image" alt="" />
            </Link>
            <div className="p-4">
                <div className="lws-card-header">
                    <p className="lws-publishedDate">{createdAt}</p>
                    <p className="lws-likeCount">
                        <i className="fa-regular fa-thumbs-up" />
                        {likes}
                    </p>
                </div>
                <Link to={`/posts/${id}`} className="lws-postTitle">
                    {title}
                </Link>
                <div className="lws-tags">
                    <Tags tags={tags} />
                </div>
                {isSaved && (
                    <div className="flex gap-2 mt-4">
                        <span className="lws-badge"> Saved </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostCard;
