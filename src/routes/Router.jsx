import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Loading from "../pages/Loader";
import ErrorPage from "../pages/ErrorPage";
import Card from "../pages/ErrorPage";
import Loader from "../pages/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        hydrateFallbackElement: <Loader></Loader> ,
      },
      {},
    ],
  },
  {
    path: "/*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
