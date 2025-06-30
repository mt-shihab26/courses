import { Route, Routes } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import TaskAdd from "./pages/TaskAdd";
import TaskEdit from "./pages/TaskEdit";

const App = () => {
    return (
        <div className="text-[#111827]">
            <Navbar />
            <div className="container relative">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tasks/add" element={<TaskAdd />} />
                    <Route path="/tasks/edit/:id" element={<TaskEdit />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
