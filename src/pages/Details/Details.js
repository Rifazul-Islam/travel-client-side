import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {  ImUser } from "react-icons/im";
import { useLoaderData } from 'react-router-dom';
import  { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import Comments from './Comments';

const Details = () => {
    
    const catagories = useLoaderData([])
    
   const {_id, img, name, descripe,price} = catagories

    const {user} = useContext(AuthContext)


    const handlarSumited = event =>{

      event.preventDefault();
        
      const form = event.target
      const message = form.message.value;
      const email = user?.email || 'usrester';
      const name = user?.displayName || 'unUser'; 
      const photoURL = user?.photoURL || 'unUser';
        const  reviews = {
                 
                service : _id ,
                message,
                email,
                name ,
                photoURL
             
           }

            

           fetch('http://localhost:5000/reviews',{

            method:'POST',

            headers :{
                'content-type':'application/json'
            },

            body:JSON.stringify(reviews )
        })

        .then(res => res.json())

        .then(data => {
        
          if(data.acknowledged){
              
              toast.success( 'your review send data database',  data)
                form.reset()
          }
        })


      


     }


       const [users, setUsers] = useState([])
          console.log(users)
       useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUsers(data))

       },[user?.email])

    return (
  <div className='mb-14'>

<div className=" mx-4 mt-2  bg-blue-300 mb-5">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img}  className=" w-[700px] h-[250px] max-w-sm rounded-lg shadow-2xl " alt='#' />
    <div>
      <h1 className="text-2xl font-bold">{name}</h1>
      <p className="py-6 text-justify">{descripe}</p>
      <p className='text-2xl'> <b>Price</b> : ${price} </p>
     
    </div>
  </div>
               
                

</div>


                <div className='mt-16'>
                      <h1 className='text-2xl text-center'> Add Review</h1>

                      <form onSubmit={handlarSumited}>
                             <p className='mx-auto text-center'>
                
                             <textarea className="textarea input-bordered my-5 w-4/5  py-2 mb-2 ps-2 input  input-info" type="text" name="message" placeholder="Bio"  />
                   
                             </p>

                         
                            <div style={{marginLeft: '150px',  marginTop:'5px'}} className="form-control mt-4 w-24 ">
                             
                            {
                                  user?.email?  <input className="btn btn-primary" type="submit" value="Submit" />

                                  :  <>

                                <input className="btn btn-primary" value="Submit" />
                       
                                     </>     
                              } 


                         </div>
   
              </form>


            <div className="alert alert-info mt-3 shadow-lg h-14 w-1/2 text-center mx-auto ">
                 <span className=''>

                                {
                             user?.displayName
                              }
                                </span>
                
                                <span>
                                {
                                  user?.email?
                <>

             <div className="avatar">
                <div className="w-9 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} alt="#"/>
                </div>
             </div>
                                 

                                
                       </>

                        : <ImUser className='text-2xl'></ImUser>
                                     
                       }   
             </span>
                                
         </div>


                </div>



               <div className='mt-14 ml-16 border-2 w-96  ' >
                   
                        <h1 className='text-blue-400 ml-4'> your Review Show </h1>
                            
                      {
                        users.map(user => <Comments
                        
                          key={user._id}
                          user={user}
                        
                        >

                        </Comments>)
                      }  
            </div> 

        </div>
    );
};

export default Details;