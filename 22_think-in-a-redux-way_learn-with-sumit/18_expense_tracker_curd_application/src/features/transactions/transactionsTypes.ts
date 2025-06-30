export type Transaction = {
    id: number;
    name: string;
    type: string;
    amount: number;
};

export type TransactionsState = {
    transactions: Transaction[];
    isLoading: boolean;
    isError: boolean;
    error: string;
    editId: number;
};
