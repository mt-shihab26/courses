import { Component } from "react";
import UserContext from "../../contexts/userContext.js";
import MovieRow from "./MovieRow.jsx";

class MovieList extends Component {
    static contextType = UserContext;

    componentDidMount = () => {
        console.log("context", this.context);
    };

    render = () => {
        return (
            <UserContext.Consumer>
                {context => (
                    <div>
                        Movie List {context.user.name}
                        <MovieRow />
                    </div>
                )}
            </UserContext.Consumer>
        );
    };
}

export default MovieList;
