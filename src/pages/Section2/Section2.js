import React from 'react';
import { BiBus} from "react-icons/bi";
import { CiCamera, CiForkAndKnife } from "react-icons/ci";
import {  MdAccessibility, MdHotel } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
const Section2 = () => {
    return (
        <div className='my-14'>
                <h1 className='text-5xl text-blue-400 text-center'> Why We Travel ? </h1>
                <p className='text-center mt-3 text-2xl'>Six reasons to travel with us.</p>
               
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7'>
                   
               

        <div>
   
     <div className="card w-96  shadow-xl bg-blue-200">
     <button className='text-5xl text-center mx-auto text-blue-400 mt-3'><BiBus/></button>
     <div className="card-body text-justify">
    <h2 className="card-title ">Local Conveyance</h2>
    <p className=''>Local conveyance refers to the transportation used for commuting or traveling within a particular area or region. </p>
   
  </div>
</div>
        
         </div>




         <div>
   
   <div className="card w-96 shadow-xl bg-blue-200">
   <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <CiForkAndKnife/> </button>
<div className="card-body text-justify">
  <h2 className="card-title ">Free Snacks & Meals</h2>
  <p className=''>Free snacks and meals are food items that are provided to employees or customers at no additional cost. </p>
 
</div>
</div>
      
       </div>




       <div>
   
   <div className="card w-96 bg-blue-200 shadow-xl">
   <button className='text-5xl text-center mx-auto text-blue-400 mt-3'><CiCamera></CiCamera></button>
  <div className="card-body text-justify">
  <h2 className="card-title ">Sightseeing Guides</h2>
  <p className=''>Sightseeing guides are individuals or companies that provide informative tours of popular tourist destinations.</p>
 
</div>
</div>
      
       </div>



       <div>
   
   <div className="card w-96 bg-blue-200 shadow-xl">
   <button className='text-5xl text-center mx-auto text-blue-400 mt-3'>  <MdAccessibility></MdAccessibility> </button>
  <div className="card-body text-justify">
  <h2 className="card-title ">50% Child Discount </h2>
  <p className=''>A 50% child discount typically refers to a promotional offer or pricing strategy that provides a reduced price .</p>
 
</div>
</div>
      
       </div>



       <div>
   
   <div className="card w-96 bg-blue-200 shadow-xl">
   <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <MdHotel></MdHotel> </button>
  <div className="card-body text-justify">
  <h2 className="card-title ">Premium Hotels</h2>
  <p className=''>Premium hotels are typically luxurious and upscale accommodations that offer high-end amenities, services, and facilities.</p>
 
</div>
</div>
      
       </div>




       <div>
   
   <div className="card w-96 bg-blue-200 shadow-xl">
   <button className='text-5xl text-center mx-auto text-blue-400 mt-3'> <BsFillPrinterFill></BsFillPrinterFill>  </button>
  <div className="card-body text-justify">
  <h2 className="card-title ">Affordable Cruise </h2>
  <p className=''>An affordable cruise refers to a cruise vacation that is relatively inexpensive and fits within the budget of most travelers.</p>
 
</div>
</div>
      
       </div>

                </div>


        </div>
    );
};

export default Section2;