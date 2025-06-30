import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SectionLayout from "../components/common/SectionLayout";
import DeadLineField from "../components/fields/DeadLineField";
import JobTitleField from "../components/fields/JobTitleField";
import JobTypeField from "../components/fields/JobTypeField";
import SalaryField from "../components/fields/SalaryField";
import SubmitButton from "../components/fields/SubmitButton";
import { changeJob, fetchJob } from "../features/jobs/jobsSlice";

const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [deadline, setDeadline] = useState("");

    const { job } = useSelector(state => state.jobs);

    const handleSubmit = () => {
        dispatch(changeJob({ jobId: id, data: { title, type, salary, deadline } }));
        navigate("/");
    };

    useEffect(() => {
        dispatch(fetchJob(id));
    }, [id]);

    useEffect(() => {
        if (job) {
            setTitle(job.title);
            setType(job.type);
            setSalary(job.salary);
            setDeadline(job.deadline);
        }
    }, [job]);

    return (
        <SectionLayout title="Edit Job">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    handleSubmit();
                }}
                className="space-y-6"
            >
                <JobTitleField value={title} setFunc={setTitle} />
                <JobTypeField value={type} setFunc={setType} />
                <SalaryField value={salary} setFunc={setSalary} />
                <DeadLineField value={deadline} setFunc={setDeadline} />
                <SubmitButton label="Edit" />
            </form>
        </SectionLayout>
    );
};

export default Edit;
