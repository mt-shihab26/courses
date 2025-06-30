import { Navigate, Route, Routes } from "react-router-dom";
import CreatePost from "./post/CreatePost.jsx";
import ShowPost from "./post/ShowPost.jsx";
import ShowPosts from "./post/ShowPosts.jsx";
import UpdatePost from "./post/UpdatePost.jsx";

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/posts" element={<ShowPosts />} />

            <Route path="/posts/add" element={<CreatePost />} />
            <Route path="/posts/:id/update" element={<UpdatePost />} />
            <Route path="/posts/:id" element={<ShowPost />} />
        </Routes>
    );
};

export default Router;
