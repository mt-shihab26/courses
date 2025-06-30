const TaskNameInput = ({ taskName, setTaskName }) => {
    return (
        <div className="fieldContainer">
            <label htmlFor="lws-taskName">Task Name</label>
            <input
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
            />
        </div>
    );
};

export default TaskNameInput;
