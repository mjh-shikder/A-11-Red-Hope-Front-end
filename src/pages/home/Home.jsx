import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const Home = () => {

    const data = useAuthContext()
    console.log(data);
    

    return (
        <div>
            Home
        </div>
    );
};

export default Home;