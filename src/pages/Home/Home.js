import React from 'react';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {

    return (
        <div className='mx-4 mt-2'>
               <Banner></Banner>
               <ServiceCard></ServiceCard>
               <Section1></Section1>
               <Section2></Section2>
               
        </div>
    );
};

export default Home;