import { Component } from "react";
import Router from "./Router.jsx";

export default class App extends Component {
    render = () => {
        return (
            <div className="container mt-5">
                <Router />
            </div>
        );
    };
}
