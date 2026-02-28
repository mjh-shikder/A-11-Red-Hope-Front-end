import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const MyDonationRequest = () => {
  const [myRequest, setMyRequest] = useState([]);
  const [totalRequest, setTotalRequest] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  const itemsPerPage = 10;

  useEffect(() => {
    axiosSecure
      .get(`/my-donation-request?page=${currentPage - 1}&size=${itemsPerPage}`)
      .then((res) => {
        setMyRequest(res.data.request);
        setTotalRequest(res.data.totalRequest);
      });
  }, [axiosSecure, currentPage, itemsPerPage]);

  const numberOfPages = Math.ceil(totalRequest / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((e) => e + 1);

  // console.log(myRequest);
  // console.log(totalRequest);
  // console.log(numberOfPages);
  //   console.log(pages);
    

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage -1)
        }
    }

    const handleNext = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage +1)
        }
    }

  return (
    <div>
      <h1 className="text-2xl font-bold textRed text-center py-5">
        My Donation Requests
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Recipient Name</th>
              <th>Location</th>
              <th>Blood Group</th>
              <th>Date</th>
              <th>Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row  */}
            {myRequest.map((request, index) => (
              <tr key={request?._id}>
                <th>{currentPage * 10 + (index + 1) - 10}</th>
                <td>{request.recipientName}</td>
                <td>
                  {request.recipientDistrict}, {request.recipientUpazila}
                </td>
                <td>{request.bloodGroup}</td>
                <td>{request.donationDate}</td>
                <td>{request.donationTime}</td>
                <td>
                  <Link
                    to={`/donation-requests-details/${request._id}`}
                    className="btn btn-sm bgGreen text-white"
                  >
                    View
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div>
                <button className="btn">Prev</button>
                {
                    pages.map(page => <button>{page}</button>)
                }
                <button className="btn">Next</button>
            </div> */}

      <div className="join flex items-center justify-center mt-6">
        <button onClick={handlePrev} className="btn rounded-l-xl">
          <FaArrowLeft />
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={`btn ${
              page === currentPage ? "bg-primary text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button onClick={handleNext} className="btn rounded-r-xl">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MyDonationRequest;
