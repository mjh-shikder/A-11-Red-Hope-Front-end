import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import Banner from './Banner';
import Featured from './Featured';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            <Banner></Banner>
            <Container>
                <Featured></Featured>
            </Container>
        </div>
    );
};

export default Home;