import { Component } from "react";
import withTooltip from "../hocs/withTooltip.jsx";

class Movie extends Component {
    render = () => {
        return (
            <div>
                Movie
                {this.props.showTooltip && <div>show tooltip</div>}
            </div>
        );
    };
}

export default withTooltip(Movie);
