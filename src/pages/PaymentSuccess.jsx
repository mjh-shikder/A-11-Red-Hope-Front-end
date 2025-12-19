import React, { useEffect } from "react";
import { Link, useSearchParams} from "react-router";
import useAxios from "../hooks/useAxios";

const PaymentSuccess = () => {

    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');

    const axiosInstance = useAxios()

    console.log(sessionId);
    

    useEffect(() => {
        axiosInstance.post(`/success-payment?session_id=${sessionId}`)
        .then(res=>{console.log(res.data)})
    },[axiosInstance, sessionId])


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md">
        <div className="text-accent text-5xl mb-4">✓</div>

        <h1 className="text-2xl text-accent font-bold mb-2">
          Payment Successful
        </h1>

        <p className="text-gray-600 mb-6">
          Thank you! Your payment has been completed successfully.
        </p>

        <Link to={'/'} >
          <button className="btn btn-primary text-white">Go to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
