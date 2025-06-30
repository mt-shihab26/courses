import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../components/home/SearchBar";
import SingleJob from "../components/home/SingleJob";
import SortingBar from "../components/home/SortingBar";
import { fetchJobs } from "../features/jobs/jobsSlice";

const filter = (jobs, searchString, sortingOrder) => {
    let filteredJobs = [...jobs];

    if (searchString.trim() !== "") {
        filteredJobs = jobs.filter(job =>
            job.title.toLowerCase().includes(searchString.trim().toLowerCase())
        );
    }

    if (sortingOrder !== "none") {
        filteredJobs.sort((a, b) => {
            if (sortingOrder === "asc") {
                return a.salary - b.salary;
            } else {
                return b.salary - a.salary;
            }
        });
    }

    return filteredJobs;
};

const Home = () => {
    const dispatch = useDispatch();

    const { jobs, isLoading, isError, error, selectedType } = useSelector(
        state => state.jobs
    );

    const { searchString, sortingOrder } = useSelector(state => state.filter);

    useEffect(() => {
        dispatch(fetchJobs());
    }, [selectedType]);

    return (
        <>
            <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
                <h1 className="lws-section-title">
                    All {selectedType === "all" ? "Available" : selectedType} Jobs
                </h1>
                <div className="flex gap-4">
                    <SearchBar />
                    <SortingBar />
                </div>
            </div>
            <div className="jobs-list">
                {isLoading ? (
                    <>Loading ...</>
                ) : isError ? (
                    <>{error}</>
                ) : jobs.length === 0 ? (
                    <>There is no jobs</>
                ) : (
                    <>
                        {filter(jobs, searchString, sortingOrder).map(job => (
                            <SingleJob key={job.id} job={job} />
                        ))}
                    </>
                )}
            </div>
        </>
    );
};

export default Home;
