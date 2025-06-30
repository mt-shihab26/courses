import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchTransactions } from "../features/transactions/transactionsSlice";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
    const dispatch = useAppDispatch();
    const { transactions, isLoading, isError, error } = useAppSelector(
        state => state.transactions
    );

    useEffect(() => {
        dispatch(fetchTransactions());
    }, []);

    return (
        <>
            <p className="second_heading">Your Transactions:</p>
            <div className="conatiner_of_list_of_transactions">
                {isLoading ? (
                    <>Loading...</>
                ) : isError || transactions.length === 0 ? (
                    <div className="error">{error || "There is no transactions"}</div>
                ) : (
                    <ul>
                        {transactions.map(transaction => (
                            <TransactionItem
                                key={transaction.id}
                                transaction={transaction}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default TransactionList;
