import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Create from "./components/createchannel/create";
import Mychannel from "./components/mychannel/mychannel";
import App from "./App";
import Homepage from "./components/Homepage/homepahe";
import Login from "./components/Login/login";
import Videoplayer from "./components/VideoPlayer/videoPlayer";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import All from "./components/allCategory/all";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/home-page",
    element: <Homepage />,
  },
  {
    path: "/all",
    element: <All />,
  },
  {
    path: "/all/:id",
    element: <Videoplayer />,
  },
  {
    path: "/mychannel",
    element: <Mychannel />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} />
  </StrictMode>
);
