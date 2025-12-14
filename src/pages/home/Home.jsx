import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';

const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            Home
        </div>
    );
};

export default Home;