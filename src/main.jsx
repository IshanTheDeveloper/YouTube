import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Homepage from "./components/Homepage/homepahe";
import Login from "./components/Login/login";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home-page",
    element: <Homepage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
