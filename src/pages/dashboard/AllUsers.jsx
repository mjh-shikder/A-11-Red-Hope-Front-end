import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();

  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    axiosSecure.get("/users").then((res) => {
      setAllUsers(res.data);
    });
  }, [axiosSecure]);

  console.log(allUsers);

  return <div>All users page</div>;
};

export default AllUsers;
