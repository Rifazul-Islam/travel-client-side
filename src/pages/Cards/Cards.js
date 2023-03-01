import React from 'react';
import { HiStar } from "react-icons/hi2";
const Cards = ({service}) => {
    const {name,img,price,descripe} = service
    console.log(service)
    return (
    <div className='my-4'>
    <div className="card bg-blue-200 shadow-xl  h-[500px]">
  <figure><img src={img} className=" w-[500px] h-60"  alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    <p> {descripe?.length>100? descripe.slice(0,100)+ '..': descripe} </p>
    <p className='text-2xl'> <b>Price</b> : ${price} </p>
    <div className="card-actions justify-start">
      <span><button className="btn btn-primary">Details</button></span> <span><HiStar className='ml-12 mt-2 text-3xl text-red-700'> </HiStar></span> 
      <span> <HiStar className=' mt-2 ml-1 text-3xl text-red-700'></HiStar></span> 
      <span> <HiStar className=' mt-2 ml-1 text-3xl text-red-700'> </HiStar></span> 
     <span><HiStar className=' mt-2 ml-1 text-3xl text-red-700'></HiStar> </span>
    </div>
  </div>
</div> 

        </div>
    );
};

export default Cards;