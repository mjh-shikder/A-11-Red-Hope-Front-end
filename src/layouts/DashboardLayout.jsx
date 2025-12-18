import React from "react";
import { Outlet } from "react-router";
import Aside from "../components/Aside";
import { Toaster } from "react-hot-toast";

const DashboardLayout = () => {
  return (
    <div className="flex ">
      <title>Dashboard</title>

      <Aside>
        <Outlet></Outlet>
        
      </Aside>

     <Toaster></Toaster>
    </div>
  );
};

export default DashboardLayout;
