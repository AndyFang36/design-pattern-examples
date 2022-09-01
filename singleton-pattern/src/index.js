import ReactDOM from "react-dom/client";
import {StrictMode} from "react";
import {App} from "./App";
// import reportWebVitals from "./reportWebVitals";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("Root"));
root.render(<StrictMode><App/></StrictMode>);

// reportWebVitals();
