import { useUpdateTaskMutation } from "../../features/tasks/tasksApi";

const StatusSelector = ({ status, id }) => {
    const [updateTask] = useUpdateTaskMutation();

    const handleChange = e => {
        updateTask({ id, data: { status: e.target.value } });
    };
    return (
        <select
            className="lws-status"
            value={status ? status : "pending"}
            onChange={handleChange}
        >
            <option value="pending">Pending</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
        </select>
    );
};

export default StatusSelector;
