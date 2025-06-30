import { useSelector } from "react-redux";
import { useGetTasksQuery } from "../../features/tasks/tasksApi";
import DisplayDeadLine from "./DisplayDeadLine";
import StatusSelector from "./StatusSelector";
import TaskButtons from "./TaskButtons";

const filterBySearch = (tasks, searchString) => {
    if (searchString === "") {
        return tasks;
    }
    return tasks.filter(task =>
        task.taskName.toLowerCase().includes(searchString.toLowerCase())
    );
};

const TasksList = () => {
    const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
    const { selectedProjects, searchString } = useSelector(
        state => state.filter
    );

    return (
        <div className="lws-task-list">
            {isLoading ? (
                <h4>Loading...</h4>
            ) : isError ? (
                <>{error.error}</>
            ) : !tasks || tasks.length === 0 ? (
                <>There is no tasks</>
            ) : (
                filterBySearch(
                    tasks.filter(task =>
                        selectedProjects.find(pId => pId === task.project.id)
                    ),
                    searchString
                ).map(task => (
                    <div key={task.id} className="lws-task">
                        <DisplayDeadLine deadline={task.deadline} />
                        <div className="lws-taskContainer">
                            <h1 className="lws-task-title">{task.taskName}</h1>
                            <span
                                className={`lws-task-badge ${task.project.colorClass}`}
                            >
                                {task.project.projectName}
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                                <img
                                    src={task.teamMember.avatar}
                                    className="team-avater"
                                />
                                <p className="lws-task-assignedOn">
                                    {task.teamMember.name}
                                </p>
                            </div>
                            <TaskButtons status={task.status} id={task.id} />

                            <StatusSelector id={task.id} status={task.status} />
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TasksList;
