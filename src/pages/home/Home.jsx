import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Footer from '../../components/Footer';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            Home page
        </div>
    );
};

export default Home;