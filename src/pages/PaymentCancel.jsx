import React from 'react';
import { Link } from 'react-router';

const PaymentCancel = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md">
        <div className="text-primary text-5xl mb-4">✕</div>

        <h1 className="text-2xl text-primary font-bold mb-2">
          Payment Cancelled
        </h1>

        <p className="text-gray-600 mb-6">
          Your payment was cancelled. No charges were made.
        </p>

        <div className="flex gap-3 justify-center">
          <Link to="/">
            <button className="btn btn-outline">Go Home</button>
          </Link>

          <Link to="/funding">
            <button className="btn btn-primary">Try Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;