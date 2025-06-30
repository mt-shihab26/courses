import { createAsyncThunk, createSlice, isAllOf } from "@reduxjs/toolkit";
import {
    createTransaction,
    deleteTransaction,
    getTransactions,
    updateTransaction,
} from "./transactionsAPI";
import { Transaction, TransactionsState } from "./transactionsTypes";

const initialState: TransactionsState = {
    transactions: [],
    isLoading: false,
    isError: false,
    error: "",
    editId: -1,
};

export const fetchTransactions = createAsyncThunk(
    "transactions/fetchTransactions",
    async () => {
        const transactions: Transaction[] = await getTransactions();
        return transactions;
    }
);

export const addTransaction: any = createAsyncThunk(
    "transactions/addTransaction",
    async ({ name, type, amount }: { name: string; type: string; amount: number }) => {
        const transaction: Transaction = await createTransaction(name, type, amount);
        return transaction;
    }
);

export const changeTransaction: any = createAsyncThunk(
    "transactions/editTransaction",
    async ({
        id,
        name,
        type,
        amount,
    }: {
        id: number;
        name: string;
        type: string;
        amount: number;
    }) => {
        const transaction: Transaction = await updateTransaction(id, name, type, amount);
        return transaction;
    }
);

export const removeTransaction = createAsyncThunk(
    "transactions/removeTransaction",
    async ({ id }: { id: number }) => {
        await deleteTransaction(id);
        return id;
    }
);

const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {
        setEditId: (state, action) => {
            state.editId = action.payload.id;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTransactions.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchTransactions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = action.payload;
            })
            .addCase(fetchTransactions.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || "";
            });
        builder
            .addCase(addTransaction.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(addTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions.push(action.payload);
            })
            .addCase(addTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || "";
            });
        builder
            .addCase(changeTransaction.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(changeTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                const index = state.transactions.findIndex(
                    t => t.id === action.payload.id
                );
                state.transactions[index] = action.payload;
            })
            .addCase(changeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || "";
            });
        builder
            .addCase(removeTransaction.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeTransaction.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.transactions = state.transactions.filter(
                    t => t.id !== action.payload
                );
            })
            .addCase(removeTransaction.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message || "";
            });
    },
});

export const transactionsReducer = transactionsSlice.reducer;
export const { setEditId } = transactionsSlice.actions;
