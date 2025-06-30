const DeadLineInput = ({ setDeadline, deadline }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-deadline">Deadline</label>
            <input
                value={deadline}
                onChange={e => setDeadline(e.target.value)}
                type="date"
                name="deadline"
                id="lws-deadline"
                required
            />
        </div>
    );
};

export default DeadLineInput;
