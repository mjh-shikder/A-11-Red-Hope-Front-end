import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
  return (
    <div className="bg-base-200 ">
      <Container>
        <Outlet></Outlet>
      </Container>
      <Toaster></Toaster>
    </div>
  );
};

export default RootLayout;
