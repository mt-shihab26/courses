import { Route, Routes } from "react-router-dom";
import AddBook from "./AddBook/AddBook";
import Layout from "./Common/Layout";
import EditBook from "./EditBook/EditBook";
import Home from "./Home/Home";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<AddBook />} />
                <Route path="/edit/:id" element={<EditBook />} />
            </Routes>
        </Layout>
    );
};

export default App;
