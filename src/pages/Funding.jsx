import React from 'react';
import useAxios from '../hooks/useAxios';
import useAuthContext from '../hooks/useAuthContext';

const Funding = () => {

    const axiosInstance = useAxios()
    const { user, setFundAmount, fundAmount } = useAuthContext();
    
    


    const handleCheckout = (e) => {
        e.preventDefault()

        const donateAmount = e.target.donateAmount.value;
         //setFundAmount(donateAmount)
        
        
        const donorEmail = user?.email;
        const donorName = user?.displayName;
       
        const formData = {donateAmount, donorEmail, donorName}

        axiosInstance.post("/create-payment-checkout", formData)
            .then(res => {
                console.log(res.data)
                window.open(res.data.url);
        })



    }

    console.log('funding page:', fundAmount);
    

    return (
      <div>
        <form onSubmit={handleCheckout} className='flex items-center min-h-dvh justify-center gap-5'>
                <input name='donateAmount' type="number" placeholder="Donation Amount" className="input focus:outline-0" />
          <button className='btn btn-accent text-white'>Donate</button>
        </form>
      </div>
    );
};

export default Funding;