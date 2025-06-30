import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createJob, deleteJob, getJob, getJobs, updateJob } from "./jobsAPI";

const initialState = {
    jobs: [],
    isLoading: false,
    isError: false,
    error: "",
    job: {},
    selectedType: "all",
};

export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (_, { getState }) => {
    const jobs = await getJobs(getState().jobs.selectedType);
    return jobs;
});

export const removeJob = createAsyncThunk("jobs/deleteJob", async jobId => {
    await deleteJob(jobId);
    return jobId;
});

export const addJob = createAsyncThunk("jobs/addJob", async data => {
    const job = await createJob(data);
    return job;
});

export const changeJob = createAsyncThunk("jobs/changeJob", async ({ jobId, data }) => {
    const job = await updateJob(jobId, data);
    return job;
});

export const fetchJob = createAsyncThunk("jobs/fetchJob", async jobId => {
    const job = await getJob(jobId);
    return job;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
        setSelectedType: (state, action) => {
            state.selectedType = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(fetchJobs.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = action.payload;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
                state.jobs = [];
            });
        builder
            .addCase(removeJob.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(removeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = state.jobs.filter(job => job.id !== action.payload);
            })
            .addCase(removeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
        builder
            .addCase(addJob.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(addJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs.push(action.payload);
                state.selectedType = "all";
            })
            .addCase(addJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
        builder
            .addCase(changeJob.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(changeJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.jobs = state.jobs.map(job =>
                    job.id === action.payload.id ? action.payload : job
                );
                state.selectedType = "all";
            })
            .addCase(changeJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
        builder
            .addCase(fetchJob.pending, state => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchJob.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = false;
                state.job = action.payload;
            })
            .addCase(fetchJob.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.error = action.error.message;
            });
    },
});

export const jobsReducer = jobsSlice.reducer;
export const { setSelectedType } = jobsSlice.actions;
