import NavItem from "../components/NavItem.jsx";
import ToggleIcon from "../components/ToggleIcon.jsx";

const HeaderSection = () => {
    return (
        <header className="container mx-auto mt-10 flex h-40 flex-col justify-between px-10 text-center md:h-20 md:flex-row">
            <a
                href="/"
                className="mx-auto h-20 w-48 bg-logo-light bg-no-repeat dark:bg-logo-dark md:mx-0"
            ></a>
            <nav className="mb-6 flex items-center justify-center space-x-4 md:space-x-10">
                <NavItem to="#features">Features</NavItem>
                <NavItem to="#testimonials">Testimonials</NavItem>
                <ToggleIcon />
            </nav>
        </header>
    );
};

export default HeaderSection;
