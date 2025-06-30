import type { FC } from "react";
import Form from "./components/Form";
import Time from "./components/Time";

const App: FC = () => {
    return (
        <div>
            <Form />
            <Time />
        </div>
    );
};

export default App;
