import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            <Container>
               
           </Container>
        </div>
    );
};

export default Home;