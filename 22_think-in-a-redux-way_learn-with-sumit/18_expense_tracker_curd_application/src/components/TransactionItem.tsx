import { useAppDispatch } from "../app/hooks";
import { setEditId, removeTransaction } from "../features/transactions/transactionsSlice";
import { Transaction } from "../features/transactions/transactionsTypes";
import deleteSVG from "./../assets/delete.svg";
import editSVG from "./../assets/edit.svg";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
    const dispatch = useAppDispatch();
    const { id, name, amount, type } = transaction;

    const handleDelete = () => {
        dispatch(removeTransaction({ id }));
    };

    const handleEdit = () => {
        dispatch(setEditId({ id }));
    };

    return (
        <li className={`transaction ${type === "income" ? "income" : "expense"}`}>
            <p>{name}</p>
            <div className="right">
                <p>৳ {amount}</p>
                <button className="link" onClick={handleEdit}>
                    <img className="icon" src={editSVG} />
                </button>
                <button className="link" onClick={handleDelete}>
                    <img className="icon" src={deleteSVG} />
                </button>
            </div>
        </li>
    );
};

export default TransactionItem;
