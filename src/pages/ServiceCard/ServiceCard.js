import React, { useEffect, useState } from 'react';
import { BiRightArrowAlt,  } from "react-icons/bi";
import { Link } from 'react-router-dom';
import Cards from '../Cards/Cards';


const ServiceCard = () => {

 const [services,setServices] = useState([]);
  // console.log(services)
 useEffect(()=>{
  fetch('http://localhost:5000/service')
  .then(res => res.json())
  .then(data =>setServices(data) )

 },[] )

 
  return (
   <div>
      <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        { services.map(service => <Cards 
         key={service._id}
         service={service}
        > 

        </Cards> )}
    
        </div>

        
        <div className='mx-auto text-center mb-10'>
        <Link to='/services'> <button className="btn btn-outline btn-info w-96 mt-5">See All <BiRightArrowAlt className='text-2xl'/> </button></Link>
        </div>
   </div>
    );
};

export default ServiceCard;