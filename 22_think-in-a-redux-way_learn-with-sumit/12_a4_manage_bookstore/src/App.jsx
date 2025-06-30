import { Provider } from "react-redux";
import AddOrUpdateBook from "./components/AddOrUpdateBook";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import store from "./redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <Navbar />
                <main className="py-12 2xl:px-6">
                    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
                        <BookList />
                        <AddOrUpdateBook />
                    </div>
                </main>
            </div>
        </Provider>
    );
};

export default App;
