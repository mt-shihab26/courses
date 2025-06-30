const DeadLineField = ({ value, setFunc }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-JobDeadline">Deadline</label>
            <input
                value={value}
                onChange={e => setFunc(e.target.value)}
                type="date"
                name="lwsJobDeadline"
                id="lws-JobDeadline"
                required
            />
        </div>
    );
};

export default DeadLineField;
