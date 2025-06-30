import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/common/Layout";
import Add from "./pages/Add";
import Edit from "./pages/Edit";
import Home from "./pages/Home";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/jobs/edit/:id" element={<Edit />} />
                <Route path="/jobs/add" element={<Add />} />
                <Route path="/jobs" element={<Home />} />
                <Route path="/" element={<Navigate to="/jobs" replace />} />
            </Routes>
        </Layout>
    );
};

export default App;
