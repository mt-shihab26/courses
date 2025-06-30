import { Component } from "react";

const withTooltip = P_Component => {
    return class WithToolTip extends Component {
        state = { showTooltip: false };

        handleMouseOver = () => this.setState({ showTooltip: true });
        handleMouseOut = () => this.setState({ showTooltip: false });

        render = () => {
            return (
                <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    <P_Component {...this.props} showTooltip={this.state.showTooltip} />
                </div>
            );
        };
    };
};

export default withTooltip;
