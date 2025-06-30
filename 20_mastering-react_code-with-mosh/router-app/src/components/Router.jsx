import { Route, Switch, Redirect } from "react-router-dom";
import Products from "./Products.jsx";
import Posts from "./Posts.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import Home from "./Home.jsx";
import ProductDetails from "./ProductDetails.jsx";
import NotFound from "./NotFound.jsx";

export default () => {
    return (
        <div>
            <div>
                <Switch>
                    <Route path="/products/:id" component={ProductDetails} />
                    <Route
                        path="/products"
                        component={(props) => (
                            <Products sortBy="newest" {...props} />
                        )}
                    />
                    <Route path="/posts/:year?/:month?" component={Posts} />
                    <Route path="/admin" component={Dashboard} />
                    <Redirect from="/messages" to="/posts" />
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact component={Home} />
                    <Redirect to="/not-found" />
                </Switch>
            </div>
        </div>
    );
};
