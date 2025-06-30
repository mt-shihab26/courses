import { Route, Switch } from "react-router-dom";
import Posts from "./Posts.jsx";
import Sidebar from "./Sidebar.jsx";
import Users from "./Users.jsx";

export default () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <Sidebar />
            <Switch>
                <Route path="/admin/users" component={Users} />
                <Route path="/admin/posts" component={Posts} />
            </Switch>
        </div>
    );
};
