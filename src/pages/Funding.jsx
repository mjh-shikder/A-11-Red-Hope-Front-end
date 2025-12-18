import React from 'react';
import useAxios from '../hooks/useAxios';
import useAuthContext from '../hooks/useAuthContext';
import { useNavigate } from 'react-router';

const Funding = () => {

    const axiosInstance = useAxios()
    const { user } = useAuthContext()
    const navigate = useNavigate();
    


    const handleCheckout = (e) => {
        e.preventDefault()

        const donateAmount = e.target.donateAmount.value;
        const donorEmail = user?.email;
        const donorName = user?.displayName;

        const formData = {donateAmount, donorEmail, donorName}

        axiosInstance.post("/create-payment-checkout", formData)
            .then(res => {
                console.log(res.data)
                // navigate(res.data.url)
                window.open(res.data.url);
            
        })


    }

    return (
      <div>
        <form onSubmit={handleCheckout} className='flex items-center min-h-dvh justify-center gap-5'>
                <input name='donateAmount' type="text" placeholder="Type here" className="input focus:outline-0" />
          <button className='btn btn-accent text-white'>Donate</button>
        </form>
      </div>
    );
};

export default Funding;