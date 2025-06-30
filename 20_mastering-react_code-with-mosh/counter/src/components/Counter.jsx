import React, { Component } from "react";

export default class Counter extends Component {
    componentDidUpdate = (prevProps, prevState) => {
        console.log("prevProps", prevProps);
        console.log("prevState", prevState);
        if (prevProps.counter.value !== this.props.counter.value) {
            // Ajax call and get data from the server
        }
    };

    componentWillUnmount = () => {
        console.log("Counter - componentWillUnmount");
    };

    render() {
        const { onIncrement, onDelete, counter, onDecrement } = this.props;

        console.log("Counter - render");

        return (
            <div>
                {/* {children} */}
                <div className="row">
                    <div className="col-1">
                        <span
                            style={{ fontSize: 19 }}
                            className={
                                "badge m-2 badge-" +
                                (counter.value === 0 ? "warning" : "primary")
                            }
                        >
                            {counter.value === 0 ? "Zero" : counter.value}
                        </span>
                    </div>
                    <div className="col">
                        <button
                            onClick={() => onIncrement(counter.id)}
                            className="btn btn-secondary btn-sm"
                        >
                            +
                        </button>
                        <button
                            onClick={() => onDecrement(counter.id)}
                            className="btn btn-secondary btn-sm m-2"
                            disabled={counter.value === 0 ? "disabled" : ""}
                        >
                            -
                        </button>
                        <button
                            onClick={() => onDelete(counter.id)}
                            className="btn btn-danger"
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
