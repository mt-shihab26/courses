import { useAppSelector } from "../app/hooks";

const TopCard = () => {
    const { transactions } = useAppSelector(state => state.transactions);

    const finalTotal = transactions.reduce(
        (s, c) => (c.type === "income" ? s + c.amount : s - c.amount),
        0
    );

    return (
        <div className="top_card">
            <p>Your Current Balance</p>
            <h3>
                <span>৳</span>
                <span> {finalTotal}</span>
            </h3>
        </div>
    );
};

export default TopCard;
