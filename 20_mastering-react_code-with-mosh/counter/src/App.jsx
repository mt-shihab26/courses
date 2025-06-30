import React, { Component, Fragment } from "react";
import Counters from "./components/Counters.jsx";
import NavBar from "./components/NavBar.jsx";

export default class App extends Component {
    state = {
        counters: [
            { id: 1, value: 8 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    };

    constructor(props) {
        super(props);
        console.log("App - Constructor", props);
        // this.state = props.something;
    }

    componentDidMount = () => {
        // Ajax Call
        // this.setState(); // with new data
        console.log("App - componentDidMount");
    };

    handleReset = () => {
        const { counters } = this.state;
        this.setState({
            counters: counters.map((counter) => {
                counter.value = 0;
                return counter;
            }),
        });
    };

    handleDelete = (counterId) => {
        const { counters } = this.state;
        this.setState({
            counters: counters.filter((counter) => counterId !== counter.id),
        });
    };

    handleIncrement = (counterId) => {
        const { counters } = this.state;
        this.setState({
            counters: counters.map((counter) => {
                if (counter.id == counterId) counter.value++;
                return counter;
            }),
        });
    };

    handleDecrement = (counterId) => {
        const { counters } = this.state;
        this.setState({
            counters: counters.map((counter) => {
                if (counter.id === counterId) counter.value--;
                return counter;
            }),
        });
    };

    render = () => {
        console.log("App - render");
        const { counters } = this.state;
        return (
            <Fragment>
                <NavBar total={counters.reduce((p, c) => p + c.value, 0)} />
                <main className="container">
                    <Counters
                        counters={counters}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        onReset={this.handleReset}
                        onDecrement={this.handleDecrement}
                    />
                </main>
            </Fragment>
        );
    };
}
