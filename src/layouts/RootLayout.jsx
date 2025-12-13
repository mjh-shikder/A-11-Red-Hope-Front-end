import React from "react";
import { Outlet } from "react-router";
import Container from "../components/Container";

const RootLayout = () => {
  return (
    <div className="bg-base-200 ">
      <Container>
        <Outlet></Outlet>
      </Container>
    </div>
  );
};

export default RootLayout;
