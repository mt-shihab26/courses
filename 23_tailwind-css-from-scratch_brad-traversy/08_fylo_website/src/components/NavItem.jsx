const NavItem = ({ children, to }) => {
    return (
        <a className="hover:text-accent-cyan" href={to}>
            {children}
        </a>
    );
};

export default NavItem;
