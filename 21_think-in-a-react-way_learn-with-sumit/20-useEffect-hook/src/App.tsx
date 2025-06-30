import { FC, useState } from "react";
import EveryRender from "./components/EveryRender";
import ClassComponent from "./components/ClassComponent";
import RenderConditionally from "./components/RenderConditionally";
import OnlyOnce from "./components/OnlyOnce";
import Cleanup from "./components/Cleanup";

const App: FC = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div>
                {/* <ClassComponent /> */}
                {/* <EveryRender /> */}
                {/* <RenderConditionally /> */}
                {/* <OnlyOnce /> */}
                {show && <Cleanup />}
            </div>
            <div>
                <button onClick={() => setShow(!show)}>
                    {show ? "Hide Cleanup" : "Show Cleanup"}
                </button>
            </div>
        </>
    );
};

export default App;
