import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TableReview = ({review,deletedReview}) => {

    const { _id, service, message, email, name, photoURL} = review
    
    const [products, setProducts] = useState({})
 


     useEffect( ()=>{
            
        fetch(`http://localhost:5000/services/${service}`)
         .then(res => res.json())
         .then(data => setProducts(data))

   },[service])
    return (
     
            <tr  >
            <td>
                <button className='text-2xl' onClick={()=>deletedReview(_id)}> X </button>
            </td>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={products?.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </td>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            
          </div>
        </td>
        <td className='text-2xl'>
          {products.name}
          <br/>
          
        </td>
        <td className='text-2xl'> {message}</td>
       
        
          <td className='text-2xl'> {name}</td>
       
        <td className='text-2xl'> {email}</td>
        <td>  
           <button className="btn btn-sm"> <Link to={`/reviews/${_id}`}> Edid</Link> </button>
           </td>
      </tr> 

      
      
    );
};

export default TableReview;