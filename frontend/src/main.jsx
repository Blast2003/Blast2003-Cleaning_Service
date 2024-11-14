import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import OurTeamPage from "./pages/OurTeamPage";
import ServicePage from "./pages/ServicePage";
import ApprociatePage from "./pages/ApprociatePage";
import SignUp from "./Components/SignUp/SignUp";
import Booking from "./pages/Booking";
import ExaminerPage from "./pages/ExaminerPage";
import UserAgreementPage from "./pages/UserAgreementPage";
import StaffDetailPage from "./pages/detailStaffPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "home",
    element: <HomePage />,
  },
  {
    path: "aboutUs",
    element: <AboutPage />,
  },
  {
    path: "ourTeam",
    element: <OurTeamPage />,
  },
  {
    path: "service",
    element: <ServicePage />,
  },
  {
    path: "customerApprociate",
    element: <ApprociatePage />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "examiner",
    element: <ExaminerPage />,
  },
  {
    path: "useragreement",
    element: <UserAgreementPage />,
  },
  {
    path: "staffdetails",
    element: <StaffDetailPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
