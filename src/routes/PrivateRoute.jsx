import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading, roleLoading, userStatus } = useAuthContext();
    const location = useLocation();

    if (loading || roleLoading ) {
      return <Loader></Loader>;
    }

  //   if (user || userStatus == 'Active') {
  //     return children;
  // }
  if (userStatus === "Active") {
    return children;
  } 

  if (userStatus === "Blocked") {
    return (
      <div className='flex justify-center items-center min-h-dvh '>
        <p className="text-secondary text-center font-bold  text-2xl border  inline px-2 py-2 rounded-2xl ">
          You Have Been Blockd By The Admin!
        </p>
      </div>
    );
  }
    return (
      <Navigate state={location.pathname} to={"/login"}>
        {" "}
      </Navigate>
    );
};

export default PrivateRoute;