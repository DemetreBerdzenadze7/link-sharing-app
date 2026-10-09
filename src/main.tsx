import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect } from "react-router";
import { RouterProvider } from "react-router/dom";
import Login from "./pages/Login";
import CreateAccount from "./pages/CreateAccount";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ProfileDetails from "./pages/ProfileDetails";
import { AccountProvider } from "./context/Accounts";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect("/login"),
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/registration",
    Component: CreateAccount,
  },
  {
    Component: Layout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      {
        path: "/profile-details",
        Component: ProfileDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AccountProvider>
      <RouterProvider router={router} />
    </AccountProvider>
  </StrictMode>,
);
