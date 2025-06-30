import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AuthProvider } from "./contexts/authContext";
import App from "./components/App";
import "./styles/quiz.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <HelmetProvider>
        <BrowserRouter>
            <AuthProvider>
                <App />
            </AuthProvider>
        </BrowserRouter>
    </HelmetProvider>
);
