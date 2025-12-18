import React from 'react';
import { Link } from 'react-router';

const PaymentSuccess = () => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md">
          <div className="text-accent text-5xl mb-4">✓</div>

          <h1 className="text-2xl text-accent font-bold mb-2">Payment Successful</h1>

          <p className="text-gray-600 mb-6">
            Thank you! Your payment has been completed successfully.
          </p>

          <Link to="/">
            <button className="btn btn-primary text-white">Go to Home</button>
          </Link>
        </div>
      </div>
    );
};

export default PaymentSuccess;