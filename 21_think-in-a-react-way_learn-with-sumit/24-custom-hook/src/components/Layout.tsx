import useWindowWidth from "../hooks/useWindowWidth";

const Layout = () => {
    const smallScreen = useWindowWidth(600);

    return (
        <div>
            <h1>Your are browsing on {smallScreen ? "small" : "large"} device</h1>
        </div>
    );
};

export default Layout;
