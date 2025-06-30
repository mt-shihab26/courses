import React from "react";

export default ({ total }) => {
    console.log("NavBar - render");
    return (
        <nav className="navbar">
            <a className="text-white navbar-brand" href="#">
                NavBar
                <span className="badge badge-pill badge-secondary">
                    {total}
                </span>
            </a>
        </nav>
    );
};
