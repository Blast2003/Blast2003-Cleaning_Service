import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import "./index.css";
import App from './App';
import HomePage from './pages/HomePage';
import AboutPage from "./pages/AboutPage";
import OurTeamPage from "./pages/OurTeamPage";
import ServicePage from "./pages/ServicePage";
import ApprociatePage from "./pages/ApprociatePage";
import SignUp from "./Components/SignUp/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "home",
    element: <HomePage/>,
  },
  {
    path: "aboutUs",
    element: <AboutPage/>,
  },
  {
    path: "ourTeam",
    element: <OurTeamPage/>,
  },
  {
    path: "service",
    element: <ServicePage/>,
  },
  {
    path: "customerApprociate",
    element: <ApprociatePage/>,
  },
  {
    path: "signup",
    element: <SignUp/>
  }
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
