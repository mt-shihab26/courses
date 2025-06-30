import { Component, Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import * as authService from "../service/authService.js";
import NavBar from "./NavBar.jsx";
import Movies from "./movies/Movies.jsx";
import NotFound from "./NotFound.jsx";
import Customers from "./Customers.jsx";
import Rentals from "./Rentals.jsx";
import Login from "./auth/Login.jsx";
import Register from "./auth/Register.jsx";
import NewMovie from "./movies/NewMovie.jsx";
import Logout from "./auth/Logout.jsx";
import ProtectedRoute from "./common/ProtectedRoute.jsx";

class App extends Component {
    state = { user: {}, isLogin: false };
    componentDidMount = () => {
        try {
            const body = authService.decodeToken();
            this.setState({ user: body, isLogin: true });
        } catch (e) {}
    };
    render = () => {
        const { isLogin, user } = this.state;
        return (
            <Fragment>
                <NavBar isLogin={isLogin} user={user} />
                <main className="container">
                    <Switch>
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/movies" component={Movies} />
                        <ProtectedRoute path="/movies/:id" component={NewMovie} />
                        <Route exact path="/customers" component={Customers} />
                        <Route exact path="/rentals" component={Rentals} />
                        <Route exact path="/not-found" component={NotFound} />
                        <Redirect from="/" exact to="/movies" />
                        <Redirect to="/not-found" />
                    </Switch>
                </main>
            </Fragment>
        );
    };
}

export default App;
