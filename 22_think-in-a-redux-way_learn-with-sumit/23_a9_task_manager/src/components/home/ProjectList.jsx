import { useDispatch, useSelector } from "react-redux";
import { toggleProjectSelection } from "../../features/filter/filterSlice";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";

const ProjectList = () => {
    const dispatch = useDispatch();

    const { data: projects, isLoading, isError, error } = useGetProjectsQuery();
    const { selectedProjects } = useSelector(state => state.filter);

    const handleCheckboxChange = id => {
        dispatch(toggleProjectSelection(id));
    };

    return (
        <div>
            <h3 className="text-xl font-bold">Projects</h3>
            <div className="mt-3 space-y-4">
                {isLoading ? (
                    <h4>Loading...</h4>
                ) : isError ? (
                    <>{error.error}</>
                ) : !projects || projects.length === 0 ? (
                    <>There is no projects</>
                ) : (
                    projects.map(project => (
                        <div key={project.id} className="checkbox-container">
                            <input
                                type="checkbox"
                                className={project.colorClass}
                                checked={
                                    selectedProjects.find(
                                        id => id == project.id
                                    )
                                        ? true
                                        : false
                                }
                                onChange={() =>
                                    handleCheckboxChange(project.id)
                                }
                            />
                            <p className="label">{project.projectName}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default ProjectList;
