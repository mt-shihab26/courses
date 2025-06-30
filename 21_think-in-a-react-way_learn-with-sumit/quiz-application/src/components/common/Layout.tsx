import { FC, ReactNode } from "react";
import Navbar from "./Navbar";
import "./layout.css";

const App: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="main">
                <div className="container">{children}</div>
            </main>
        </>
    );
};

export default App;
