import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const DashboardHome = () => {
     const {  userDb } = useAuthContext();
    return (
      <div>
        <h2 className="text-4xl font-semibold mb-6 mt-10 text-primary text-center">
          Welcome Back {userDb.name}
        </h2>
      </div>
    );
};

export default DashboardHome;