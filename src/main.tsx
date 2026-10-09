import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Registration from "./components/registration-from/Registration";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/registration"),
  },
  {
    path: "/registration",
    Component: Registration,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
