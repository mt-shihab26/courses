import { Provider } from "react-redux";
import Navbar from "./components/Navbar";
import TodoPage from "./components/TodoPage";
import store from "./store/store";

const App = () => {
    return (
        <Provider store={store}>
            <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
                <Navbar />
                <TodoPage />
            </div>
        </Provider>
    );
};

export default App;
