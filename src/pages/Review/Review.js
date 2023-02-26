import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import  { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import TableReview from './TableReview';

const Review = () => {

    const {user} = useContext(AuthContext)
    const [reviews, setReviews] = useState([])
   
   
    console.log(reviews)
    useEffect( ()=>{
       
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)

        .then(res => res.json()) 
        .then(data =>setReviews(data) )
}, [user?.email])

  

   const deletedReview = id =>{

    const sure = window.confirm('Are you sure delete sercies')
      
           
     if(sure){

           fetch(`http://localhost:5000/reviews/${id}`, {

            method:'DELETE',

            
           })

           .then(res =>res.json() )
               
           .then(data => {
             console.log(data)

              if(data.deletedCount > 0){

                 
                   toast.success('delete Successfully')

                  const remaing = reviews.filter(rev => rev._id !== id)

                  setReviews(remaing)
              }
           })
     }
      
 }
    return (
        <div className='mb-52 mx-4 mt-2' >
                  <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
      <th>#</th>
    <th>Service img</th>
    <th>user img</th>
    <th>Service Name</th>
    <th>Review </th>
    <th> UserName </th>
     <th>Email Name</th>
      </tr>
    </thead>
    <tbody>
              
              {
                 reviews.map( review => <TableReview
                  key={review._id}
                  review = {review}
                  deletedReview = {deletedReview}
                 
                 >

                 </TableReview> )
              }
      
    
    </tbody>
    
    
    
  </table>
</div>
        </div>
    );
};

export default Review;