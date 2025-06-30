import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeJob } from "../../features/jobs/jobsSlice";
import { formatSalary } from "../../utils/func";

const colors = {
    "Full Time": "#FF8A00",
    Internship: "#FF5757",
    Remote: "#56E5C4",
};

const SingleJob = ({ job }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { title, type, salary, deadline, id } = job;

    const handleEdit = () => {
        navigate(`/jobs/edit/${id}`);
    };

    const handleDelete = () => {
        dispatch(removeJob(id));
    };

    return (
        <div className="lws-single-job">
            <div className="flex-1 min-w-0">
                <h2 className="lws-title">{title}</h2>
                <div className="job-footers">
                    <div className="lws-type">
                        <i className={`fa-solid fa-stop !text-[${colors[type]}] text-lg mr-1.5`} />
                        {type}
                    </div>
                    <div className="lws-salary">
                        <i className="fa-solid fa-bangladeshi-taka-sign text-slate-400 text-lg mr-1.5" />
                        BDT {formatSalary(salary)}
                    </div>
                    <div className="lws-deadline">
                        <i className="fa-regular fa-calendar text-slate-400 text-lg mr-1.5" />
                        Closing on {deadline}
                    </div>
                </div>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <span className="hidden sm:block">
                    <button onClick={handleEdit} type="button" className="lws-edit btn btn-primary">
                        <i className="fa-solid fa-pen text-gray-300 -ml-1 mr-2" />
                        Edit
                    </button>
                </span>
                <span className="sm:ml-3">
                    <button
                        onClick={handleDelete}
                        type="button"
                        className="lws-delete btn btn-danger "
                    >
                        <i className="fa-solid fa-trash text-gray-300 -ml-1 mr-2" />
                        Delete
                    </button>
                </span>
            </div>
        </div>
    );
};

export default SingleJob;
