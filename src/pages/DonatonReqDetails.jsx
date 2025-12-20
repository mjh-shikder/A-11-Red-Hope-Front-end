import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useParams } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { BiSolidDonateBlood } from "react-icons/bi";

const DonatonReqDetails = () => {
  const params = useParams();
  const dataId = params._id;
  const { user } = useAuthContext();
  const axiosSecure = useAxiosSecure();
  console.log("dataid===", dataId);

  const [detail, setDetails] = useState("");

  useEffect(() => {
    if (!user || !dataId) return;

    axiosSecure
      .get(`/donation-request-details/${dataId}`)
      .then((res) => {
        setDetails(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [axiosSecure, dataId, user]);
  console.log("detail===", detail);

  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center md:mb-20 mb-10">
        <h1 className="text-4xl font-bold text-primary text-center my-10">
          Donation Request Details
        </h1>
        <div className=" rounded-xl bg-base-100 md:w-6/12 ">
          <div className="card-body">
            <h2 className="text-xl font-semibold  text-center ">
              Recipient Details
            </h2>
            {detail && (
              <div>
                <p className="text-lg text-gray-700">
                  Recipient Name:{" "}
                  <span className="font-semibold">
                    {" "}
                    {detail.recipientName?.charAt(0).toUpperCase() +
                      detail.recipientName?.slice(1)}
                  </span>
                </p>
                <p className="text-lg text-gray-700 ">
                  Blood Group:{" "}
                  <span className="text-primary font-semibold">
                    {detail?.bloodGroup}
                  </span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  District & Upazila:{" "}
                  <span className="font-semibold">
                    {detail?.recipientDistrict}, {detail?.recipientUpazila}
                  </span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  Hospital Name:{" "}
                  <span className="font-semibold">{detail?.hospitalName}</span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  Street Address:{" "}
                  <span className="font-semibold">{detail?.fullAddress}</span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  Donation Date:{" "}
                  <span className="font-semibold text-primary">
                    {detail?.donationDate}
                  </span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  Donation Time:{" "}
                  <span className="font-semibold">{detail?.donationTime}</span>{" "}
                </p>
                <p className="text-lg text-gray-700 ">
                  Donation Status:{" "}
                  <span className="font-semibold">
                    {detail?.donationStatus}
                  </span>{" "}
                </p>
                <div className="border-b border-gray-100 my-5"></div>
                <h2 className=" font-semibold text-gray-500 text-center ">
                  Requester Details
                </h2>
                <div className="border  p-4 rounded-xl border-gray-100 my-5 flex justify-between items-center">
                  <p className=" text-gray-500 text-center">
                    Requester Name:{" "}
                    <span className="font-semibold">
                      {detail?.requesterName}
                    </span>{" "}
                  </p>
                  <p className=" text-gray-500 text-center">
                    Requester Email:{" "}
                    <span className="font-semibold">
                      {detail?.requesterEmail}
                    </span>{" "}
                  </p>
                </div>
              </div>
            )}
            <div className="card-actions justify-end">
              <button className="btn rounded-xl btn-accent text-white w-full">
                <BiSolidDonateBlood size={20}/> Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DonatonReqDetails;
