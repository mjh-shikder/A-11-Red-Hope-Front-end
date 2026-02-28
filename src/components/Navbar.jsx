import { Link, Links, NavLink } from "react-router";
import logo from "../assets/logo.png";
import useAuthContext from "../hooks/useAuthContext";
import toast from "react-hot-toast";
import { BiSearchAlt } from "react-icons/bi";

const Navbar = () => {
  const { user, logout } = useAuthContext();
  

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Logout Successful");
      })
      .catch((error) => {
        toast(error);
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "bg-linear-to-l from-red-950 to-red-600 text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          Home
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/donation-requests"}
          className={({ isActive }) =>
            isActive
              ? "bg-linear-to-l from-red-950 to-red-600 text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          Donation Requests
        </NavLink>{" "}
      </li>
      <li>
        {" "}
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            isActive
              ? "bg-linear-to-l from-red-950 to-red-600 text-white px-2.5 py-0 rounded-lg font-semibold flex items-center gap-0.5 "
              : "text-secondary font-semibold flex items-center gap-0.5"
          }
        >
          <BiSearchAlt size={18} /> Search
        </NavLink>{" "}
      </li>
      {user ? (
        <li>
          {" "}
          <NavLink
            to={"/funding"}
            className={({ isActive }) =>
              isActive
                ? "bg-linear-to-l from-red-950 to-red-600 text-white px-2.5 py-0.5 rounded-lg font-semibold  "
                : "text-secondary font-semibold"
            }
          >
            Funding
          </NavLink>{" "}
        </li>
      ) : (
        ""
      )}

      <li>
        {" "}
        <NavLink
          to={"/about-us"}
          className={({ isActive }) =>
            isActive
              ? "bg-linear-to-l from-red-950 to-red-600 text-white px-2.5 py-0.5 rounded-lg font-semibold  "
              : "text-secondary font-semibold"
          }
        >
          About Us
        </NavLink>{" "}
      </li>
    </>
  );

  // 
  return (
    <div className="navbar bg-base-200 md:px-5  ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className=" btn btn-ghost lg:hidden px-2 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          {/* small screen  */}
          <ul
            tabIndex="-1"
            className="lg:hidden dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow items-center text-center flex flex-col justify-center "
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className=" text-xl">
          <img className="w-30" src={logo} alt="Logo" />
        </Link>
      </div>
      {/* desktop */}
      <div className="navbar-center hidden lg:flex  ">
        <ul className=" space-x-5 px-1 flex items-center">{links}</ul>
      </div>
      <div className="navbar-end">
        {/* Profile Avatar and DropDown */}
        {user ? (
          <div className="dropdown dropdown-end z-30">
            <div tabIndex={0} role="button" className="m-1">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-11 rounded-full ring-2 ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li className="flex items-center">
                <Link
                  to={"/dashboard/home"}
                  className=" btn-accent rounded-xl mb-2.5 font-semibold "
                >
                  Dashboard
                </Link>{" "}
              </li>
              <li className="flex items-center">
                <button
                  onClick={handleLogout}
                  className=" btn-primary rounded-xl font-semibold text-primary  "
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link
              to={"/login"}
              className="btn btn-primary rounded-xl text-white "
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
