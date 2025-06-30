import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Layout from "./common/Layout";
import NoMatch from "./common/NoMatch";
import Home from "./home/Home";
import Login from "./login/Login";
import Quiz from "./quiz/Quiz";
import Singup from "./signup/Signup";

const App: FC = () => {
    return (
        <Layout>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/signup" element={<Singup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </Layout>
    );
};

export default App;
