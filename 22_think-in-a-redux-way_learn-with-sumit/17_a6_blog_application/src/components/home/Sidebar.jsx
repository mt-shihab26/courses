import SidebarFilter from "./SidebarFilter";
import SidebarSort from "./SidebarSort";

const Sidebar = () => {
    return (
        <aside>
            <div className="sidebar-items">
                <SidebarSort />
                <SidebarFilter />
            </div>
        </aside>
    );
};

export default Sidebar;
