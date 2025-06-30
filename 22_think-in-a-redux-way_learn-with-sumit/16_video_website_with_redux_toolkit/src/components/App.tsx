import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ListPage from "./ListPage";
import VideoPlayerPage from "./VideoPlayerPage";

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/videos/:videoId" element={<VideoPlayerPage />} />
            </Routes>
        </Layout>
    );
};

export default App;
