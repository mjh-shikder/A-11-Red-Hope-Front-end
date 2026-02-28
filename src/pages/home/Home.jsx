import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from './Banner';
import Featured from './Featured';
import ContactUs from './ContactUs';
import Stats from './Stat';
import Partners from './Partner';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            <Banner></Banner>
            <Container>
                <Featured></Featured>
                <Stats></Stats>
                <Partners></Partners>
                <ContactUs></ContactUs>

            </Container>
        </div>
    );
};

export default Home;