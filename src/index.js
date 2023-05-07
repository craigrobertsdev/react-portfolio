import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/reset.css";
import "./index.css";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createHashRouter([
  {
    path: "/*",
    element: <App />,
  },
]);
root.render(
  <React.StrictMode>
    {/* HashRouter used as page is deployed to GH Pages which doesn't support BrowserRouter */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
