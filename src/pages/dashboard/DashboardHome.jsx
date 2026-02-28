import React, { useEffect, useState } from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import { Droplet, HeartHandshake, Activity, Bell } from "lucide-react";
import useAxiosSecure from '../../hooks/useAxiosSecure';

const DashboardHome = () => {
  const [myRequest, setMyRequest] = useState([]);
   const axiosSecure = useAxiosSecure();
  const { userDb } = useAuthContext();
  
    useEffect(() => {
      axiosSecure
        .get(`/my-donation-request`)
        .then((res) => {
          setMyRequest(res.data.request);
          
        });
    }, [axiosSecure]);
  
    return (
      <div className="min-h-screen bg-base-100 text-base-content p-6 lg:p-10">
        {/* Welcome Header */}
        <div className="bg-primary text-primary-content p-8 rounded-xl shadow-xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Welcome Back {userDb.name}👋</h1>
          <p className="mt-2 text-lg opacity-90">
            Here’s what’s happening with your Red Hope activity today.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <Droplet className="text-primary" size={28} />
              <span className="badge badge-primary badge-outline rounded-xl">
                All Time
              </span>
            </div>
            <h2 className="text-3xl font-bold text-primary">{myRequest.length}</h2>
            <p className="text-secondary">Blood Donations Requests</p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <HeartHandshake className="text-accent" size={28} />
              <span className="badge badge-accent badge-outline rounded-xl">
                Total
              </span>
            </div>
            <h2 className="text-3xl font-bold text-accent">18</h2>
            <p className="text-secondary">Lives Impacted</p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
            <div className="flex items-center justify-between mb-4">
              <Activity className="text-primary" size={28} />
              <span className="badge badge-primary badge-outline rounded-xl">
                Status
              </span>
            </div>
            <h2 className="text-xl font-semibold text-primary">{userDb.length}Active Donor</h2>
            <p className="text-secondary">Eligible to donate again</p>
          </div>
        </div>

       
      </div>
    );
};

export default DashboardHome;