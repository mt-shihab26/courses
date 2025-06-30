import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setSelectedType } from "../../features/jobs/jobsSlice";
import SubMenu from "./SubMenu";

const Sidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = type => {
        dispatch(setSelectedType(type));
        navigate("/jobs");
    };

    return (
        <div className="sidebar">
            <nav>
                <ul className="space-y-4">
                    <li>
                        <p
                            style={{ cursor: "pointer" }}
                            onClick={() => handleClick("all")}
                            className="main-menu menu-active"
                            id="lws-alljobs-menu"
                        >
                            <i className="fa-solid fa-briefcase" />
                            <span> All Available Jobs</span>
                        </p>
                        <ul className="space-y-6 lg:space-y-2 ">
                            <SubMenu
                                onClick={handleClick}
                                to="/jobs/internship"
                                id="lws-internship-menu"
                                color="!text-[#FF5757]"
                                label="Internship"
                            />
                            <SubMenu
                                onClick={handleClick}
                                to="/jobs/fulltimep"
                                id="lws-fulltime-menu"
                                color="!text-[#FF8A00]"
                                label="Full Time"
                            />
                            <SubMenu
                                onClick={handleClick}
                                to="/jobs/remote"
                                id="lws-remote-menu"
                                color="!text-[#56E5C4]"
                                label="Remote"
                            />
                        </ul>
                    </li>
                    <li>
                        <Link to="/jobs/add" className="main-menu" id="lws-addJob-menu">
                            <i className="fa-solid fa-file-circle-plus" />
                            <span>Add NewJob</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
