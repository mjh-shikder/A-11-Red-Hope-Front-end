import React from "react";
import { Droplet, HeartHandshake, Users } from "lucide-react";
import { Link } from "react-router";

const Stats = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 lg:px-20 py-16 rounded-xl">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold bg-linear-to-l from-red-950 to-red-600 bg-clip-text text-transparent ">
          Red Hope Impact
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl mx-auto">
          Together we are building a life-saving community. Here’s a look at the
          difference our platform is making every single day.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Total Donations */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20  hover:animate-pulse ">
          <div className="card-body items-center text-center">
            <div className="p-4 rounded-full  bgRed mb-4">
              <Droplet className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold textRed">12,540+</h2>
            <p className="textRed text-lg">Total Donations</p>
            <div className="badge badge-secondary badge-outline mt-3">
              Lives Saved Daily
            </div>
          </div>
        </div>

        {/* Total Donors */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-accent/20  hover:animate-pulse">
          <div className="card-body items-center text-center">
            <div className="p-4 rounded-full bgRed  mb-4">
              <HeartHandshake className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold textRed ">8,320+</h2>
            <p className="textRed text-lg">Registered Donors</p>
            <div className="badge badge-secondary badge-outline mt-3">
              Community Heroes
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border border-primary/20  hover:animate-pulse">
          <div className="card-body items-center text-center">
            <div className="p-4 rounded-full bgRed mb-4">
              <Users className="text-white" size={40} />
            </div>
            <h2 className="text-4xl font-bold textRed ">5,780+</h2>
            <p className="textRed text-lg">Active Users</p>
            <div className="badge badge-secondary badge-outline mt-3">
              Growing Every Day
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Highlight Section */}
      <div className="mt-20 text-5xl font-extrabold bg-linear-to-r from-red-900 via-red-700 to-red-900 rounded-3xl p-10 text-center shadow-2xl text-white">
        <h2 className="text-3xl font-bold mb-4  ">Every Drop Counts ❤️</h2>
        <p className="max-w-2xl mx-auto text-lg opacity-90">
          Red Hope continues to connect donors with patients in urgent need.
          Your contribution strengthens our mission and helps create a
          healthier, more compassionate world.
        </p>
        <Link
          to={"/register"}
          className="btn rounded-xl bg-base-100 text-primary mt-6 hover:scale-105 transition-transform"
        >
          Join The Movement
        </Link>
      </div>
    </div>
  );
};

export default Stats;
