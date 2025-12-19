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
import AddRequest from "../pages/dashboard/CreateDonationRequest";
import DashboardHome from "../pages/dashboard/DashboardHome";
import MyDonationRequest from "../pages/dashboard/MyDonationRequest";
import AllUsers from "../pages/dashboard/AllUsers";
import PrivateRoute from "./PrivateRoute";
import Funding from "../pages/Funding";
import DonationRequests from "../pages/DonationRequests";
import PaymentSuccess from "../pages/PaymentSuccess";
import PymentCancel from "../pages/PaymentCancel";
import PaymentCancel from "../pages/PaymentCancel";
import SearchPage from "../pages/SearchPage";

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
        path: "/funding",
        element: (
          <PrivateRoute>
            <Funding></Funding>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/payment-success",
        element: (
          <PrivateRoute>
            <PaymentSuccess></PaymentSuccess>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/payment-cancelled",
        element:  (
          <PrivateRoute>
            <PaymentCancel></PaymentCancel>
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/donation-requests",
        element: <DonationRequests></DonationRequests>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/dashboard/home",
        element: <DashboardHome></DashboardHome>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "create-donation-request",
        element: <AddRequest></AddRequest>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "my-donation-requests",
        element: <MyDonationRequest></MyDonationRequest>,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
        hydrateFallbackElement: <Loader></Loader>,
      },
    ],
  },

  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
  },
]);

export default router;
