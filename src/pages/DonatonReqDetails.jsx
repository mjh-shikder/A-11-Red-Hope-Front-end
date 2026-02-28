import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import { useNavigate, useParams } from "react-router";
import useAuthContext from "../hooks/useAuthContext";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { BiSolidDonateBlood } from "react-icons/bi";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAxios from "../hooks/useAxios";

const DonatonReqDetails = () => {
    const params = useParams();
    const navigation = useNavigate()
  const dataId = params._id;
  const { user } = useAuthContext();
    const axiosSecure = useAxiosSecure();
    const axiosInstance = useAxios()
  console.log("dataid===", dataId);
const MySwal = withReactContent(Swal);
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
    
    // Confirm button function 
    const handleConfirm = () => {


       
            axiosInstance.patch(`/update/donation/status?_id=${dataId}`)
                .then(res => {
                    console.log(res.data);
                    navigation("/donation-requests");
                    
                
            })
     


        Swal.fire({
          position: "top",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
    }

  return (
    <Container>
      <div className="w-full flex flex-col items-center justify-center md:mb-20 mb-10">
        <h1 className="text-4xl font-bold textRed text-center my-10">
          Donation Request Details
        </h1>
        <div className=" rounded-xl bg-base-100 md:w-6/12 ">
          <div className="card-body">
            <h2 className="text-xl font-bold textRed text-center ">
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
              {/* You can open the modal using document.getElementById('ID').showModal() method */}
              <button
                className="btn rounded-xl bgGreen text-white w-full"
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
              >
                <BiSolidDonateBlood size={20} /> Donate Now
              </button>
              <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div className="flex flex-col justify-center items-center ">
                    <label className="label ">Donor Name</label>
                    <input
                      type="text"
                      value={user?.displayName}
                      className="text-accent text-center border-accent input rounded-xl focus:outline-0"
                    />
                    <label className="label ">Donor Email</label>
                    <input
                      type="text"
                      value={user?.email}
                      className="text-accent text-center border-accent input rounded-xl focus:outline-0"
                    />
                    <button onClick={handleConfirm} className="btn btn-accent px-7 rounded-xl text-white mt-3.5">
                      Confirm
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DonatonReqDetails;
