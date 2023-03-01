import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableReview = ({review,deletedReview}) => {

    const { _id, service, message, email, name, photoURL} = review
    
    const [products, setProducts] = useState({})
 


     useEffect( ()=>{
            
        fetch(`https://travel-server-side.vercel.app/services/${service}`)
         .then(res => res.json())
         .then(data => setProducts(data))

   },[service])
    return (
     
            <tr className='' >
            <td>
                <button className='text-2xl' onClick={()=>deletedReview(_id)}> X </button>
            </td>
        <td className='p-[30px]'>
          <div className="flex items-center ">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={products?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>

        <td>
          <div className="flex items-center">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td className='p-0'>
          {products.name}
          <br/>
          
        </td>
        <td className='p-0'> {message}</td>
       
        
          <td className='p-0'> {name}</td>
       
        <td className='p-0 '> {email}</td>
        <td>  
           <button className="btn btn-sm"> <Link to={`/reviews/${_id}`}> Edit</Link> </button>
           </td>
      </tr> 

      
      
    );
};

export default TableReview;