import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyDonationRequest = () => {

    const [myRequest, setMyRequest] = useState([])
    const [totalRequest, setTotalRequest] = useState(0)
    const [currentPage, setCurrentPage]= useState(1)
    const axiosSecure = useAxiosSecure()
    const itemsPerPage = 10

    useEffect(() => {
        axiosSecure.get(`/my-donation-request?page=${currentPage-1}&size=${itemsPerPage}`)
            .then(res => {
                setMyRequest(res.data.request)
                setTotalRequest(res.data.totalRequest)
            
        })
    }, [axiosSecure, currentPage, itemsPerPage])
    
    const numberOfPages = Math.ceil(totalRequest / itemsPerPage);
    const pages = [...Array(numberOfPages).keys()].map(e=> e+1)

    console.log(myRequest);
    console.log(totalRequest);
    console.log(numberOfPages);
    console.log(pages);
    
    

    return (
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Recipient Name</th>
                <th>Location</th>
                <th>Blood Group</th>
              </tr>
            </thead>
            <tbody>
              {/* row  */}
              {myRequest.map((request, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{request.recipientName}</td>
                  <td>
                    {request.recipientDistrict}, {request.recipientUpazila}
                  </td>
                  <td>{request.bloodGroup}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        prev 1 2 3 4 nex
      </div>
    );
};

export default MyDonationRequest;