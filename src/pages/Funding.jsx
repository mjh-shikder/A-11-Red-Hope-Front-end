import React from 'react';

const Funding = () => {
    return (
      <div>
        <form className='flex items-center min-h-dvh justify-center gap-5'>
                <input type="text" placeholder="Type here" className="input focus:outline-0" />
          <button className='btn btn-accent text-white'>Donate</button>
        </form>
      </div>
    );
};

export default Funding;