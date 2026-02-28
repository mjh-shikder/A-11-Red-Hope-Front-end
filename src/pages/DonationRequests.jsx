import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import Loader from "./Loader";
import useAxios from "../hooks/useAxios";

const DonationRequests = () => {
  const { user, loading, setLoading } = useAuthContext();
  const [allRequest, setAllRequest] = useState([]);

  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);

    axiosInstance.get("/pending-donations").then((res) => {
      console.log(res.data);
      setAllRequest(res.data);
      setLoading(false);
    });
  }, [axiosInstance, setLoading, user]);

  if (loading) return <Loader></Loader>;
  return (
    <Container>
      <div className="flex flex-col justify-center items-center">
        <div className="w-full h-80 rounded-xl flex items-center justify-center bg-cover bg-center bg-[url(https://cdn.pixabay.com/photo/2020/01/31/06/40/red-blood-cell-4807214_1280.jpg)] ">
          <div className="backdrop-blur-sm brightness-90 rounded-xl md:px-10 md:py-4 ">
            <h1 className="text-4xl font-bold text-white text-center my-5">
              Blood Donation Request
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-10">
          {allRequest.map((card) => (
            <div
              key={card?._id}
              className="card shadow-xl  w-96 rounded-xl 
              bg-base-100 border border-primary "
            >
              <div className="card-body hover:animate-pulse ">
                <h2 className="text-2xl textRed font-bold ">
                  <span className="font-bold px-2 py-0.5 rounded-xl bgRed text-white">
                    {card.bloodGroup}
                  </span>{" "}
                  Blood Neede
                </h2>
                {/* <p className="font-bold text-xl  rounded-xl text-gray-700 text-center ">
                  Recipient Details
                </p> */}
                <div className=" rounded-xl p-4  text-lg border-x border-gray-100 ">
                  <p className="font-bold text-gray-700 ">
                    🙍Name:{" "}
                    {card.recipientName[0].toUpperCase() +
                      card.recipientName.slice(1)}
                  </p>
                  <p className="font-bold text-gray-700 ">
                    📍Locaion: {card.recipientDistrict}, {card.recipientUpazila}
                  </p>
                  <p className="font-bold text-gray-700 ">
                    🏥Hospitla: {card.hospitalName}
                  </p>
                  <p className="font-bold ">
                    📅
                    <span className="textRed ">Date: {card.donationDate}</span>
                  </p>
                  <p className="font-bold text-gray-700 ">
                    ⌛Time: {card.donationTime}
                  </p>
                </div>
                <div className="  ">
                  <Link
                    to={`/donation-requests-details/${card._id}`}
                    className="btn w-full bgRed rounded-xl text-white "
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
