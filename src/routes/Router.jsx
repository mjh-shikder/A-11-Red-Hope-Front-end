import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Loading from "../pages/Loader";
import ErrorPage from "../pages/ErrorPage";
import Card from "../pages/ErrorPage";
import Loader from "../pages/Loader";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import MainDashboard from "../pages/dashboard/MainDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {},
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/dashboard",
        element: <MainDashboard></MainDashboard>,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/register",
    element: <Register></Register>,
    hydrateFallbackElement: <Loader></Loader>,
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
  },
]);

export default router;
