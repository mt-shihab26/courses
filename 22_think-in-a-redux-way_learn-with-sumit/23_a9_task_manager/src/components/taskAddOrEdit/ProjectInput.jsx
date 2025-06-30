import { useEffect } from "react";
import { useGetProjectsQuery } from "../../features/projects/projectsApi";

const ProjectInput = ({ projectId, setProjectId, setProjects }) => {
    const { data: projects } = useGetProjectsQuery();

    useEffect(() => {
        if (projects && projects.length !== 0) {
            setProjects(projects);
        }
    }, [projects]);

    return (
        <div className="fieldContainer">
            <label htmlFor="lws-projectName">Project Name</label>
            <select
                value={projectId}
                onChange={e => setProjectId(e.target.value)}
                id="lws-projectName"
                name="projectName"
                required
            >
                <option value hidden>
                    Select Project
                </option>
                {projects?.map(project => (
                    <option key={project.id} value={project.id}>
                        {project.projectName}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ProjectInput;
