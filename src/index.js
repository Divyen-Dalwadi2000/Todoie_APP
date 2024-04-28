import React from "react";
import ReactDOM from "react-dom/client";
import App1 from "./App1/App1"
import App2 from "./App2/App2";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>
        <App1 />
        <App2 />
    </>
);




