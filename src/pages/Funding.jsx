import React, { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import useAuthContext from "../hooks/useAuthContext";
import Container from "../components/Container";
import { BiSolidDonateHeart } from "react-icons/bi";

const Funding = () => {
  const axiosInstance = useAxios();
  const { user } = useAuthContext();

  const [listOfFundDonators, setListOfFundDonators] = useState([])

  const handleCheckout = (e) => {
    e.preventDefault();

    const donateAmount = e.target.donateAmount.value;
    //setFundAmount(donateAmount)

    const donorEmail = user?.email;
    const donorName = user?.displayName;

    const formData = { donateAmount, donorEmail, donorName };
    console.log("Form data:::", formData);
    
    axiosInstance.post("/create-payment-checkout", formData).then((res) => {
      console.log(res.data);
      window.location.replace(res.data.url);
    });
  };

  
  
  useEffect(() => {
    axiosInstance.get("/fund-donators")
      .then(res => {
        setListOfFundDonators(res.data)
        console.log(res.data);
        
      
    })
  },[axiosInstance])

  return (
    <Container>
      <div>
        <form
          onSubmit={handleCheckout}
          className="flex items-center my-10 justify-center gap-5"
        >
          <input
            name="donateAmount"
            type="number"
            placeholder="Donation Amount"
            className="input rounded-xl border-accent text-accent focus:outline-0"
          />
          <button className="btn rounded-xl btn-accent text-white">
            <BiSolidDonateHeart size={20} /> Donate Now
          </button>
        </form>
        <h1 className="text-2xl font-bold text-primary text-center my-5">
          List Of Fund Donators
        </h1>
        {/* ====================Table ============================== */}
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 mb-20 ">
          <table className="table  ">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {listOfFundDonators.map((donor, index) => (
                <tr key={donor?._id}>
                  <th>{index + 1}</th>
                  <td>{donor?.donorName}</td>
                  <td>{donor?.amount}</td>
                  <td>{donor?.time.split("T")[0]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Funding;
