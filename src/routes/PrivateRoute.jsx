import React from 'react';
import useAuthContext from '../hooks/useAuthContext';
import { Navigate, useLocation } from 'react-router';
import Loader from '../pages/Loader';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuthContext()
    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    if (user) {
        return children
    }
  return <Navigate state={location.pathname} to={'/login'} > </Navigate>
};

export default PrivateRoute;