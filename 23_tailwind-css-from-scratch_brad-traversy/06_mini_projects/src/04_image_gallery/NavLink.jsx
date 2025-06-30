const NavLink = ({ children, src }) => {
    return (
        <div className="group">
            <a href={src}>{children}</a>
            <div className="mx-2 mt-2 border-b-2 border-black opacity-0 duration-500 group-hover:opacity-100"></div>
        </div>
    );
};

NavLink.defaultProps = {
    src: "#",
};

export default NavLink;
