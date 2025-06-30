import { Component } from "react";
import { Link } from "react-router-dom";
import {
    deletePost,
    getPosts,
    updatePost,
} from "./../../repository/postRepository.js";

export default class ShowPosts extends Component {
    state = {
        posts: [],
    };

    componentDidMount = async () => {
        this.setState({ posts: await getPosts() });
    };

    // Optimistic Updates
    handleDelete = async postId => {
        const originalPosts = this.state.posts;

        const posts = this.state.posts.filter(p => p.id !== postId);
        this.setState({ posts });

        try {
            await deletePost(postId);
            // throw new Error();
        } catch (e) {
            if (e.response && e.response.status === 404) {
                alert("This post has already deleted.");
            }
            this.setState({ posts: originalPosts });
        }
    };

    render = () => {
        const { posts } = this.state;

        return (
            <div className="container mt-5">
                <Link type="button" className="btn btn-primary" to="/posts/add">
                    Add
                </Link>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr key={post.id}>
                                <td>
                                    <Link to={`/posts/${post.id}`}>
                                        {post.title}
                                    </Link>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-info"
                                    >
                                        <Link to={`/posts/${post.id}/update`}>
                                            Edit
                                        </Link>
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() =>
                                            this.handleDelete(post.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };
}
