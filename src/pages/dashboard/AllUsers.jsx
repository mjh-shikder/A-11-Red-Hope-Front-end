import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { CiMenuKebab } from "react-icons/ci";
const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

    const [allUsers, setAllUsers] = useState([]);
    
    const fetchUsers = () => {
        axiosSecure.get("/users").then((res) => {
          setAllUsers(res.data);
        });
    }

  useEffect(() => {
    fetchUsers()
  }, []);

  console.log(allUsers);

  const handleStatusChange = (email, status) => {
    axiosSecure
      .patch(`/update/user/status?email=${email}&status=${status}`)
      .then((res) => {
          console.log(res.data);
          fetchUsers();
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name & Role</th>
              <th>Contact & Location</th>

              <th>Status</th>
              <th>Edit Status</th>
              <th>More</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allUsers.map((user) => (
              <tr key={user._id}>
                {/* <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th> */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user?.mainPhotoUrl}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                      <div className="text-sm opacity-50">{user?.role}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Email: {user?.email}
                  <br />
                  <p className="badge badge-ghost badge-sm">
                    Location: {user?.district}, {user?.upazila}
                  </p>
                </td>
                <td
                  className={
                    user?.status == "Active"
                      ? "text-accent font-semibold"
                      : "text-primary font-semibold"
                  }
                >
                  {user?.status}
                </td>
                <th>
                  {user?.status == "Active" ? (
                    <button
                      onClick={() => handleStatusChange(user?.email, "Blocked")}
                      className="btn btn-primary text-white btn-xs"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleStatusChange(user?.email, "Active")}
                      className="btn btn-accent text-white btn-xs"
                    >
                      Active
                    </button>
                  )}
                </th>
                <th>
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className=" m-1">
                      <CiMenuKebab size={20} />
                    </div>
                    <ul
                      tabIndex="-1"
                      className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                    >
                      <li>
                        <button className="text-gray-600 bg-base-200 hover:bg-accent hover:text-white">
                          Make Volunteer
                        </button>
                      </li>
                      <li>
                        <button className="text-gray-600 bg-base-200 hover:bg-accent hover:text-white">
                          Make Admin
                        </button>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
