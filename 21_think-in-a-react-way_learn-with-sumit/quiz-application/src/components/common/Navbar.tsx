import { FC } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { logout } from "../../firebase/authentication";
import "./navbar.css";

const Navbar: FC = () => {
    const { currentUser } = useAuth();

    return (
        <nav className="nav">
            <ul>
                <li>
                    <a href="/" className="brand">
                        <img src="/images/logo-bg.png" alt="Learn with Sumit Logo" />
                        <h3>Quiz Application</h3>
                    </a>
                </li>
            </ul>
            <div className="account">
                {currentUser ? (
                    <>
                        <span className="material-icons-outlined" title="Account">
                            account_circle
                        </span>
                        <span>{currentUser.name}</span>
                        <span className="material-icons-outlined" title="Logout" onClick={logout}>
                            logout
                        </span>
                    </>
                ) : (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
