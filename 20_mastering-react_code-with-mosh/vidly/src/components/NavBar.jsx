import { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

const NavBar = ({ isLogin, user }) => {
    return (
        <nav className="navbar-custom navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                Vidly
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/movies">
                        Movies
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/customers">
                        Customers
                    </NavLink>
                    <NavLink className="nav-item nav-link" to="/rentals">
                        Rentals
                    </NavLink>

                    {isLogin ? (
                        <Fragment>
                            <NavLink className="nav-item nav-link" to="/profile">
                                {user.name}
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/logout">
                                Logout
                            </NavLink>
                        </Fragment>
                    ) : (
                        <Fragment>
                            <NavLink className="nav-item nav-link" to="/register">
                                Register
                            </NavLink>
                            <NavLink className="nav-item nav-link" to="/login">
                                Login
                            </NavLink>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );
};
export default NavBar;
