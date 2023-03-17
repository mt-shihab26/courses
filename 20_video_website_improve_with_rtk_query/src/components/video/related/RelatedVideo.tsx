import { Link } from "react-router-dom";
import { TVideo } from "../../../features/api/apiSlice";

const RelatedVideo = ({ video }: { video: TVideo }) => {
    const { thumbnail, date, id, title, author, views, duration } = video;
    return (
        <div className="w-full flex flex-row gap-2 mb-4">
            <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to="/videos/1">
                    <img src={thumbnail} className="object-cover" alt={title} />
                </Link>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {duration}
                </p>
            </div>

            <div className="flex flex-col w-full">
                <Link to={`/videos/${id}`}>
                    <p className="text-slate-900 text-sm font-semibold">{title}</p>
                </Link>
                <span className="text-gray-400 text-xs mt-2 hover:text-gray-600">
                    {author}
                </span>
                <p className="text-gray-400 text-xs mt-1">
                    {views} views . {date}
                </p>
            </div>
        </div>
    );
};

export default RelatedVideo;
