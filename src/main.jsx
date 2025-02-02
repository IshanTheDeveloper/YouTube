import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header/header";
import Sidebar from "./components/Sidebar/sidebar";
import Login from "./components/Login/login";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Login></Login>
  </StrictMode>
);
