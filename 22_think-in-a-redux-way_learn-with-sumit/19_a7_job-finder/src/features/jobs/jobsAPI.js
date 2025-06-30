import http from "../../utils/http";

export const getJobs = async jobType => {
    const url = jobType !== "all" ? `/jobs?type_like=${jobType}` : `/jobs`;
    const response = await http.get(url);
    return await response.json();
};

export const deleteJob = async jobId => {
    const response = await http.delete(`/jobs/${jobId}`);
    return await response.json();
};

export const createJob = async data => {
    const response = await http.post("/jobs", data);
    return await response.json();
};

export const updateJob = async (jobId, data) => {
    const response = await http.patch(`/jobs/${jobId}`, data);
    return await response.json();
};

export const getJob = async jobId => {
    const response = await http.get(`/jobs/${jobId}`);
    if (response.status !== 200) throw new Error("Status code has to be 200");
    return await response.json();
};
