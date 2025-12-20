import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Container from "../components/Container";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "./Loader";


const DonationRequests = () => {
    const { user, loading, setLoading } = useAuthContext();
  const [allRequest, setAllRequest] = useState([]);

  const axiosSecure = useAxiosSecure();

    useEffect(() => {
        setLoading(true)
        if (!user) return; 
    axiosSecure.get("/pending-donations").then((res) => {
      console.log(res.data);
        setAllRequest(res.data);
        setLoading(false)
    });
  }, [axiosSecure, setLoading, user]);

    if(loading)return <Loader></Loader>
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-primary text-center my-5">
          Donation Request
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          {allRequest.map((card) => (
            <div key={card?._id} className="card card-border bg-base-100 w-96 rounded-xl">
              <div className="card-body">
                <h2 className="text-xl text-primary font-semibold ">
                  <span className="font-bold  p-2 rounded-xl bg-primary text-white">
                    {card.bloodGroup}
                  </span>{" "}
                  Blood Neede
                </h2>
                <p className="font-semibold text-[18px] text-primary text-center ">
                  Recipient Details
                </p>
                <div className="border rounded-xl p-4 border-gray-200">
                  <p className="font-semibold text-gray-700 ">
                    Name:{" "}
                    {card.recipientName[0].toUpperCase() +
                      card.recipientName.slice(1)}
                  </p>
                  <p className="font-semibold text-gray-700 ">
                    Locaion: {card.recipientDistrict}, {card.recipientUpazila}
                  </p>
                  <p className="font-semibold text-gray-700 ">
                    Hospitla: {card.hospitalName}
                  </p>
                  <p className="font-semibold text-primary  ">
                    Date: {card.donationDate}
                  </p>
                  <p className="font-semibold text-gray-700 ">
                    Time: {card.donationTime}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`/donation-requests-details/${card._id}`}
                    className="btn w-full btn-accent rounded-xl text-white "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default DonationRequests;
