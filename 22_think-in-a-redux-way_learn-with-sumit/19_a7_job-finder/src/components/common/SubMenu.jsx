const SubMenu = ({ to, id, color, label, onClick }) => {
    return (
        <li>
            <p
                style={{ cursor: "pointer" }}
                onClick={() => onClick(label)}
                className="sub-menu"
                to={to}
                id={id}
            >
                <i className={`fa-solid fa-stop ${color}`} />
                {label}
            </p>
        </li>
    );
};

export default SubMenu;
