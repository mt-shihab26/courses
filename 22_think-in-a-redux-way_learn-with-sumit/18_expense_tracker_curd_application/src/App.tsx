import TransactionForm from "./components/TransactionForm";
import Layout from "./components/Layout";
import TopCard from "./components/TopCard";
import TransactionList from "./components/TransactionList";

const App = () => {
    return (
        <Layout>
            <TopCard />
            <TransactionForm />
            <TransactionList />
        </Layout>
    );
};

export default App;
