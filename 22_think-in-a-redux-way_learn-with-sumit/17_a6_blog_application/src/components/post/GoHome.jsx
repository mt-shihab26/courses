import { Link } from "react-router-dom";

const GoHome = () => {
    return (
        <div className="container mt-8">
            <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome">
                <i className="mr-2 fa-solid fa-house" />
                Go Home
            </Link>
        </div>
    );
};

export default GoHome;
