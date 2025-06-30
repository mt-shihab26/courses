import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SectionLayout from "../components/common/SectionLayout";
import DeadLineField from "../components/fields/DeadLineField";
import JobTitleField from "../components/fields/JobTitleField";
import JobTypeField from "../components/fields/JobTypeField";
import SalaryField from "../components/fields/SalaryField";
import SubmitButton from "../components/fields/SubmitButton";
import { addJob } from "../features/jobs/jobsSlice";

const Add = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [salary, setSalary] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = () => {
        dispatch(addJob({ title, type, salary, deadline }));
        navigate("/");
    };

    return (
        <SectionLayout title="Add New Job">
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
                <SubmitButton label="Add" />
            </form>
        </SectionLayout>
    );
};

export default Add;
