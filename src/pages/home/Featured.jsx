import React from 'react';
import { FaHandHoldingHeart, FaSearch, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router";

const Featured = () => {
    return (
      <section className="bg-base-200 py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-l from-red-950 to-red-600 bg-clip-text text-transparent">
              Why Choose Our Red Hope?
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              We connect blood donors and patients quickly and safely through a
              trusted and easy-to-use system.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            {/* Feature 1 */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition textRed  hover:animate-pulse">
              <div className="card-body items-center text-center ">
                <FaHandHoldingHeart className="text-4xl text-secondary  mb-4  " />
                <h3 className="card-title ">Need Blood?</h3>
                <p className="text-sm text-gray-500">
                  If you or someone you love needs blood, create a request now
                  and reach verified donors nearby within minutes.
                </p>
                <div className="card-actions mt-4">
                  {/* <Link
                    to="/dashboard/create-donation-request"
                    className="btn btn-primary text-white btn-sm"
                  >
                    Creat Request
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition textRed hover:animate-pulse">
              <div className="card-body items-center text-center">
                <FaSearch className="text-4xl text-secondary mb-4" />
                <h3 className="card-title">Find Donors Easily</h3>
                <p className="text-sm text-gray-500">
                  Search donors by blood group, district, and availability in
                  just a few clicks.
                </p>
                <div className="card-actions mt-4">
                  {/* <Link
                    to="/search"
                    className="btn btn-primary text-white btn-sm"
                  >
                    Search
                  </Link> */}
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="card bg-base-100 shadow-md hover:shadow-lg transition textRed hover:animate-pulse ">
              <div className="card-body items-center text-center">
                <FaUserPlus className="text-4xl text-secondary mb-4" />
                <h3 className="card-title">Join as a Donor</h3>
                <p className="text-sm text-gray-500">
                  Register as a donor and become part of a life-saving
                  community.
                </p>
                <div className="card-actions mt-4">
                  {/* <Link
                    to="/register"
                    className="btn btn-primary text-white btn-sm"
                  >
                    Become a Donor
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Featured;