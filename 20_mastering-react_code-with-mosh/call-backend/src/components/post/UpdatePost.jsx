import { Component } from "react";
import { getPost2, updatePost } from "../../repository/postRepository";
import withRouter from "../common/withRouter";

class UpdatePost extends Component {
    state = {
        post: {},
    };

    componentDidMount = async () => {
        const { id } = this.props.params;
        const post = await getPost2(id);
        this.setState({ post });
    };

    handleChange = ({ currentTarget: input }) => {
        const { post } = this.state;
        post.title = input.value;

        this.setState({ post });
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { post } = this.state;

        console.log(post);
        const newPost = await updatePost(post.id, post);
        console.log(newPost);

        this.setState({ newPost });
    };

    render = () => {
        const { id } = this.props.params;
        const { post } = this.state;

        return (
            <div>
                <h2>Update {id}</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">
                            Title
                        </label>
                        <input
                            onChange={this.handleChange}
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            name="title"
                            value={post.title}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </form>
            </div>
        );
    };
}

export default withRouter(UpdatePost);
