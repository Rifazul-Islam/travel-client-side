import React from 'react';
import SecretHook from '../../SecretHook/SecretHook';
import Banner from '../Banner/Banner';
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
import ServiceCard from '../ServiceCard/ServiceCard';

const Home = () => {
   
      SecretHook('Home')

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