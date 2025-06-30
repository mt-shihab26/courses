const jobTitles = [
    "Software Engineer",
    "Software Developer",
    "Full Stack Developer",
    "MERN Stack Developer",
    "DevOps Engineer",
    "QA Engineer",
    "Product Manager",
    "Social Media Manager",
    "Senior Executive",
    "Junior Executive",
    "Android App Developer",
    "IOS App Developer",
    "Frontend Developer",
    "Frontend Engineer",
];

const JobTitleField = ({ value, setFunc }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-JobTitle" className="text-sm font-medium text-slate-300">
                Job Title
            </label>
            <select
                onChange={e => setFunc(e.target.value)}
                id="lws-JobTitle"
                name="lwsJobTitle"
                required
                value={value}
            >
                <option value="" hidden>
                    Select Job
                </option>
                {jobTitles.map((jobTitle, index) => (
                    <option value={jobTitle} key={index}>
                        {jobTitle}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default JobTitleField;
