import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            <Container>
                <Navbar></Navbar>
           </Container>
        </div>
    );
};

export default Home;