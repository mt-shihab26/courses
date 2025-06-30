class CounterClass extends Component {
    state = { count: 0 };

    handleClick = () => this.setState({ count: this.state.count + 1 });

    render = () => {
        return (
            <div>
                <h2>{this.state.count}</h2> <h2 onClick={this.handleClick}> +</h2>
            </div>
        );
    };
}

export default CounterClass;
