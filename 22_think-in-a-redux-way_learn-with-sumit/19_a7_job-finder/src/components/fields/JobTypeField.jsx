const jobTypes = ["Full Time", "Internship", "Remote"];

const JobTypeField = ({ value, setFunc }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-JobType">Job Type</label>
            <select
                value={value}
                onChange={e => setFunc(e.target.value)}
                id="lws-JobType"
                name="lwsJobType"
                required
            >
                <option value="" hidden>
                    Select Job Type
                </option>
                {jobTypes.map((jobType, index) => (
                    <option value={jobType} key={index}>
                        {jobType}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default JobTypeField;
