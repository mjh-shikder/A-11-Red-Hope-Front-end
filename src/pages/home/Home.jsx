import React from 'react';
import useAuthContext from '../../hooks/useAuthContext';
import Container from '../../components/Container';
import Footer from '../../components/Footer';


const Home = () => {

    const {user} = useAuthContext()
    console.log(user);
    

    return (
        <div>
            <Container className={"md:px-0 px-2"}>
              <Footer></Footer>
           </Container>
        </div>
    );
};

export default Home;