import http from "../../utils/http";
import { Transaction } from "./transactionsTypes";

export const getTransactions = async (): Promise<Transaction[]> => {
    const response = await http.get("/transactions");
    const transactions: Transaction[] = await response.json();
    return transactions;
};

export const createTransaction = async (
    name: string,
    type: string,
    amount: number
): Promise<Transaction> => {
    const response = await http.post("/transactions", { name, type, amount });
    return await response.json();
};

export const updateTransaction = async (
    id: number,
    name: string,
    type: string,
    amount: number
) => {
    const response = await http.patch(`/transactions/${id}`, { name, type, amount });
    return await response.json();
};

export const deleteTransaction = async (id: number) => {
    await http.delete(`/transactions/${id}`);
};
