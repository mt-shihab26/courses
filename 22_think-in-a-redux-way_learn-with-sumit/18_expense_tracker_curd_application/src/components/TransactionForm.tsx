import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../app/hooks";
import {
    addTransaction,
    setEditId,
    changeTransaction,
} from "../features/transactions/transactionsSlice";

const TransactionForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [type, setType] = useState("income");
    const [amount, setAmount] = useState(0);

    const { editId, transactions, isLoading, isError } = useAppSelector(
        state => state.transactions
    );

    const resetStates = () => {
        setName("");
        setType("income");
        setAmount(0);
    };

    const handleSubmit = () => {
        if (editId === -1) {
            dispatch(addTransaction({ name, type, amount }));
        } else {
            dispatch(changeTransaction({ id: editId, name, type, amount }));
            dispatch(setEditId({ id: -1 }));
        }
        resetStates();
    };

    const handleCancelEditTransction = () => {
        dispatch(setEditId({ id: -1 }));
        resetStates();
    };

    useEffect(() => {
        if (editId !== -1) {
            const transaction = transactions.find(t => t.id === editId);
            setName(transaction?.name || "");
            setType(transaction?.type || "");
            setAmount(transaction?.amount || 0);
        }
    }, [editId]);

    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
            >
                <div className="form-group">
                    <label htmlFor="transaction_name">Name</label>
                    <input
                        value={name}
                        onChange={e => setName(e.target.value)}
                        type="text"
                        name="transaction_name"
                        id="transaction_name"
                        placeholder="My Salary"
                    />
                </div>
                <div className="form-group radio">
                    <label htmlFor="transaction_type">Type</label>
                    <div className="radio_group">
                        <input
                            checked={type === "income"}
                            onChange={() => setType("income")}
                            type="radio"
                            defaultValue="income"
                            name="transaction_type"
                            id="transaction_type1"
                        />
                        <label htmlFor="transaction_type1">Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            checked={type === "expense"}
                            onChange={() => setType("expense")}
                            type="radio"
                            defaultValue="expense"
                            name="transaction_type"
                            id="transaction_type2"
                            placeholder="Expense"
                        />
                        <label htmlFor="transaction_type2">Expense</label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="transaction_amount">Amount</label>
                    <input
                        value={amount}
                        onChange={e => setAmount(Number(e.target.value))}
                        type="number"
                        placeholder={"300"}
                        name="transaction_amount"
                        id="transaction_amount"
                    />
                </div>
                <button disabled={isLoading} type="submit" className="btn">
                    {editId === -1 ? "Add Transaction" : "Update Transaction"}
                </button>
                {isError && <p className="error">There was an error occured</p>}
            </form>
            {editId !== -1 && (
                <button onClick={handleCancelEditTransction} className="btn cancel_edit">
                    Cancel Edit
                </button>
            )}
        </div>
    );
};

export default TransactionForm;
