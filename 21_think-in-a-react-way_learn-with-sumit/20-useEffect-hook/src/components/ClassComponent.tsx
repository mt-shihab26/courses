import { Component } from "react";

type State = {
    time: Date;
    count: number;
};

class ClassComponent extends Component<{}, State> {
    state = {
        time: new Date(),
        count: 0,
    };

    handleClick = () => {
        this.setState((p: State) => ({ ...p, count: p.count + 1 }));
    };

    tick = () => {
        this.setState((p: State) => ({ ...p, time: new Date() }));
    };

    componentDidMount = () => {
        setInterval(this.tick, 1000);
    };

    componentDidUpdate = () => {
        document.title = `${this.state.count} useEffect Hook`;
    };

    render = () => {
        const { time } = this.state;
        return (
            <div>
                <div>Time: {time.toLocaleTimeString()}</div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        );
    };
}

export default ClassComponent;
