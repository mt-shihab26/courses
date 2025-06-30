import useWindowWidth from "../hooks/useWindowWidth";

const Layout2 = () => {
    const smallScreen = useWindowWidth(768);

    return (
        <div className={smallScreen ? "small" : "large"}>
            <h1>This is another layout</h1>
        </div>
    );
};

export default Layout2;
