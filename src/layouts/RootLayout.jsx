import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import { Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div className="bg-base-200 ">
      <nav>
        <Container>
          <Navbar></Navbar>
        </Container>
      </nav>
      <Outlet></Outlet>
      <Toaster></Toaster>
    </div>
  );
};

export default RootLayout;
