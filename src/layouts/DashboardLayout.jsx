import React from "react";
import { Outlet } from "react-router";
import Aside from "../components/Aside";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <title>Dashboard</title>

      <Aside>
        <Outlet></Outlet>
      </Aside>

      <div className="flex-1 p-5"></div>
    </div>
  );
};

export default DashboardLayout;
