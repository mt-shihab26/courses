import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="App">
            <div className="header">
                <h1>Expense Tracker</h1>
            </div>
            <div className="main">
                <div className="container">{children}</div>
            </div>
            <div className="footer">©2022 Learn with Sumit</div>
        </div>
    );
};

export default Layout;
