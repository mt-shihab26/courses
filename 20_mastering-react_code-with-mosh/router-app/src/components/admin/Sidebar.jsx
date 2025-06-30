import LiLink from "../common/LiLink.jsx";

export default () => {
    return (
        <div>
            <ul>
                <LiLink to="/admin/users">Users</LiLink>
                <LiLink to="/admin/posts">Posts</LiLink>
            </ul>
        </div>
    );
};
