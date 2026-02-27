import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Sticky from "react-sticky-el/lib/basic-version";

const RootLayout = () => {
  return (
    <div className="bg-base-200 ">
      <nav className="z-50 top-0 sticky">
        <Navbar></Navbar>
      </nav>

      <Outlet></Outlet>

      <Footer></Footer>

      <Toaster></Toaster>
    </div>
  );
};

export default RootLayout;
