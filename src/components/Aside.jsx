import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { Users, Droplet, Settings, LogOut } from "lucide-react";
import { MdSpaceDashboard } from "react-icons/md";
import { GoHome} from "react-icons/go";
import { GiWaterDrop } from "react-icons/gi";
import { FaHandHoldingDroplet } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import logo from "../assets/redHope.png";
import useAuthContext from "../hooks/useAuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { CgProfile } from "react-icons/cg";

const Aside = ({ children }) => {
  const { role } = useAuthContext();

  const navigation = useNavigate()

  const handleLogout = () => {
    signOut(auth)
    navigation('/')
  }

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
            <Link to={"/"}>
              <img className="md:w-28 w-20 " src={logo} alt="" />
            </Link>
            <p className="text-sm opacity-70 font-semibold ">
              {role[0].toUpperCase() + role.slice(1)} Dashboard
            </p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 gap-1 flex-1">
            <li>
              <NavLink
                to="/dashboard/home"
                className={({ isActive }) =>
                  isActive ? "bgRed text-white" : "bg-base-200"
                }
              >
                <MdSpaceDashboard size={20} /> Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="my-donation-requests"
                className={({ isActive }) =>
                  isActive ? " bgRed text-white" : "bg-base-200"
                }
              >
                <GiWaterDrop size={20} /> My Donation Requests
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/dashboard/create-donation-request"
                className={({ isActive }) =>
                  isActive ? " bgRed text-white" : ""
                }
              >
                <FaHandHoldingDroplet size={20} /> Create Donation Requests
              </NavLink>
            </li>

            {role == "admin" && (
              <li>
                <NavLink
                  to="/dashboard/all-users"
                  className={({ isActive }) =>
                    isActive ? " bgRed text-white" : ""
                  }
                >
                  <ImUsers size={20} /> All Users
                </NavLink>
              </li>
            )}
            <li>
              <NavLink
                to="/dashboard/profile"
                className={({ isActive }) =>
                  isActive ? " bgRed text-white" : ""
                }
              >
                <CgProfile size={20} /> Profile
              </NavLink>
            </li>

            {/* <li className="mt-2">
              <span className="menu-title">Settings</span>
              <ul>
                <li>
                  <NavLink
                    to="/dashboard/settings"
                    className={({ isActive }) =>
                      isActive ? " bg-primary" : "bg-base-200 "
                    }
                  >
                    <Settings className="w-4 h-4" /> Preferences
                  </NavLink>
                </li>
              </ul>
            </li> */}
          </ul>

          {/* Footer actions */}
          <div className="p-4 border-t border-base-300">
            <Link to={"/"} className="btn bgGreen text-white  w-full mb-2.5">
              <GoHome size={20} /> Home
            </Link>

            <button
              onClick={handleLogout}
              className="btn btn-primary  btn-outline w-full"
            >
              <LogOut className="w-4 h-4" /> Logout
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
