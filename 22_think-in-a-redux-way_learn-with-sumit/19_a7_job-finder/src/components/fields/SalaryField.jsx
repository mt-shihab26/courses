const SalaryField = ({ value, setFunc }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-JobSalary">Salary</label>
            <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input
                    value={value}
                    onChange={e => setFunc(String(e.target.value))}
                    type="number"
                    name="lwsJobSalary"
                    id="lws-JobSalary"
                    required
                    className="!rounded-l-none !border-0"
                    placeholder="2000000"
                />
            </div>
        </div>
    );
};

export default SalaryField;
