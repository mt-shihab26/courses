import ProjectList from "../components/home/ProjectList";
import TasksList from "../components/home/TasksList";
import TeamMembersList from "../components/home/TeamMembersList";

const Home = () => {
    return (
        <div>
            <div className="sidebar">
                <ProjectList />
                <TeamMembersList />
            </div>
            <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <div className="justify-between mb-10 space-y-2 md:flex md:space-y-0">
                        <a href="/tasks/add" className="lws-addnew group">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 group-hover:text-indigo-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.5v15m7.5-7.5h-15"
                                />
                            </svg>
                            <span className="group-hover:text-indigo-500">
                                Add New
                            </span>
                        </a>
                    </div>
                    <TasksList />
                </main>
            </div>
        </div>
    );
};

export default Home;
