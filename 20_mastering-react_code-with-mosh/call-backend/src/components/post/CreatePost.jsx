import { Component } from "react";
import { savePost } from "../../repository/postRepository";
import { mapFromTargetToObjects } from "../../utils/formUtil";

export default class CreatePost extends Component {
    handleSubmit = async e => {
        e.preventDefault();

        const input = mapFromTargetToObjects(e.target, 1);

        await savePost({ title: input.title });
    };

    render = () => {
        return (
            <div>
                <h2>Create Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="inputTitle" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="inputTitle"
                            aria-describedby="titleHelp"
                            name="title"
                        />
                        <div id="titleHelp" className="form-text">
                            Add the post title
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        );
    };
}
