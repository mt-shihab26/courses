import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import App from "./components/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ToastContainer />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
