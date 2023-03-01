import React, { useEffect, useState } from 'react';
import SecretHook from '../../SecretHook/SecretHook';
import SeppenerPage from '../SeppenerPage/SeppenerPage';
import ServicesCards from './ServicesCards';

const Services = () => {
   const [travels, setTravel] = useState([])
   const [loading, setLoading] = useState(true)
   SecretHook('Service')

       useEffect(()=>{
        fetch('https://travel-server-side.vercel.app/services')
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
         <h1 className='text-3xl text-indigo-400 text-center mt-7 mb-4 font-bold'>  Our All Service </h1>
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