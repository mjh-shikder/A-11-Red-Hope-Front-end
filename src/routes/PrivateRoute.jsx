import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading, roleLoading, userStatus } = useAuthContext();
    const location = useLocation();

    if (loading || roleLoading) {
      return <Loader></Loader>;
    }

    if (user || userStatus == 'Active') {
      return children;
    }
  return <Navigate state={location.pathname} to={'/login'} > </Navigate>
};

export default PrivateRoute;