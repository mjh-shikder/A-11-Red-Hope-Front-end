import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from './Banner';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
           <Banner></Banner>
        </div>
    );
};

export default Home;