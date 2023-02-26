import React, { useEffect, useState } from 'react';
import ServicesCards from './ServicesCards';

const Services = () => {
   const [travels, setTravel] = useState([])
    console.log(travels)
       useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setTravel(data))
       },[])
    return (
        <div>
         <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        { travels.map(travel => <ServicesCards
         
         key={travel._id}
         travel={travel}
        >

        </ServicesCards> )}
    
        </div>
        </div>
    );
};

export default Services;