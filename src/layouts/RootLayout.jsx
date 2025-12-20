import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="bg-base-200 ">
      <nav>
        <Container>
          <Navbar></Navbar>
        </Container>
      </nav>

      <Outlet></Outlet>

      <Footer></Footer>

      <Toaster></Toaster>
    </div>
  );
};

export default RootLayout;
