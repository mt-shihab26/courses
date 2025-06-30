import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import Conversation from "./pages/Conversation";
import Inbox from "./pages/Inbox";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
    const authChecked = useAuthCheck();

    return (
        <>
            {!authChecked ? (
                <>Checking authentication...</>
            ) : (
                <Routes>
                    <Route
                        path="/"
                        element={
                            <PublicRoute>
                                <Login />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <PublicRoute>
                                <Register />
                            </PublicRoute>
                        }
                    />
                    <Route
                        path="/inbox"
                        element={
                            <PrivateRoute>
                                <Conversation />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="/inbox/:id"
                        element={
                            <PrivateRoute>
                                <Inbox />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            )}
        </>
    );
};

export default App;
