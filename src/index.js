import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Create from "./Create";

createRoot(document.getElementById("root")).render(<Create />);
// ReactDOM.render(<Create />, document.getElementById("root"));
