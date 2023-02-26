import React, { useEffect, useState } from 'react';
import SecretHook from '../../SecretHook/SecretHook';
import SeppenerPage from '../SeppenerPage/SeppenerPage';
import ServicesCards from './ServicesCards';

const Services = () => {
   const [travels, setTravel] = useState([])
   const [loading, setLoading] = useState(true)
   SecretHook('Service')

       useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => {
            setTravel(data)
            setLoading(false)
        })
       },[])

       if(loading){
          
            return <div> <SeppenerPage></SeppenerPage> </div>
       }

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