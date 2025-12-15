import React from "react";
import { NavLink } from "react-router";
import { Home, Users, Droplet, Settings, LogOut } from "lucide-react";
import logo from "../assets/redHope.png";
import useAuthContext from "../hooks/useAuthContext";

const Aside = ({children}) => {

const {role }= useAuthContext()


  return (
    <div className="drawer lg:drawer-open min-h-screen bg-base-100">
      {/* Drawer toggle (mobile) */}
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Top navbar (mobile) */}
        <div className="navbar bg-base-200 lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1">
            <span className="font-semibold text-lg">Dashboard</span>
          </div>
        </div>

        {/* Main content */}
        <main className="p-6">{children}</main>
      </div>

      {/* Sidebar */}
      <aside className="drawer-side">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <div className="w-72 min-h-full bg-base-200 text-base-content flex flex-col">
          {/* Brand */}
          <div className="px-6 py-5 border-b border-base-300">
            <img className="md:w-28 w-20 " src={logo} alt="" />
            <p className="text-sm opacity-70">{role} Dashboard</p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 gap-1 flex-1">
            <li>
              <NavLink
                to="/dashboard"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Home className="w-4 h-4" /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/donors"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Users className="w-4 h-4" /> Donors
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/requests"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                <Droplet className="w-4 h-4" /> Requests
              </NavLink>
            </li>
            <li className="mt-2">
              <span className="menu-title">Settings</span>
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    <Settings className="w-4 h-4" /> Preferences
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          {/* Footer actions */}
          <div className="p-4 border-t border-base-300">
            <button className="btn btn-primary  btn-outline w-full">
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
