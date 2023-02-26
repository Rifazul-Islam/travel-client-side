import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
const ServicesCards = ({travel}) => {
    const {_id,name, img, price, descripe} = travel
    return (
        <div>
        <div className='my-4 '>
    <div className="card bg-blue-200   h-[500px]">

   
   <PhotoProvider>
    <PhotoView src={img}>
    <figure><img src={img} className=" w-[500px] h-[250px] "  alt="Shoes" /></figure>
    </PhotoView>
   </PhotoProvider>

 
  
  <div className="card-body">
    <h2 className="card-title"> {name} </h2>
    <p> {descripe?.length>100? descripe.slice(0,100)+ '..': descripe} </p>
    <p className='text-2xl'> <b>Price</b> : ${price} </p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary"> <Link to={`/detailService/${_id}`}> Details</Link> </button>
  
   
    </div>
  </div>
</div> 

        </div>
        </div>
    );
};

export default ServicesCards;