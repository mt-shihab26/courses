import { Link } from "react-router-dom";

export default ({ to, children }) => (
    <li>
        <Link to={to}>{children}</Link>
    </li>
);
