import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';

const Reviews = () => {
   
    const user = useContext(AuthContext)
    const storeReviews = useLoaderData([])
      const {name, message, service} = storeReviews
    const handlarSumited = event =>{

        event.preventDefault();
          
        const form = event.target
        const message = form.message.value;
        const email = user?.email || 'usrester';
        const name = user?.displayName || 'unUser'; 
        const photoURL = user?.photoURL || 'unUser';
          const  reviews = {
                   
                 service,
                  message,
                  email,
                  name ,
                  photoURL
               
             }
  
              
  
             fetch('https://travel-server-side.vercel.app/reviews',{
  
              method:'POST',
  
              headers :{
                  'content-type':'application/json'
              },
  
              body:JSON.stringify(reviews )
          })
  
          .then(res => res.json())
  
          .then(data => {
          
            if(data.acknowledged){
                
                toast.success('your update send data database',  data)
                  form.reset()
            }
          })
  
       }
  

    return (
        <div className='mx-auto text-center mb-96 bg-indigo-200 ml-4 mr-4 mt-2'>
               <h1> Name : {name} </h1>
               <form onSubmit={handlarSumited}>
                        <p className='mx-auto text-center'>
      
                             <input className="textarea input-bordered my-5 w-4/5  py-2 mb-2 ps-2 input  input-info"  type="text" name="message" defaultValue={message} placeholder="Bio"  />  
                   
                             </p>

                            <div style={{marginLeft: '150px',  marginTop:'5px'}} className="form-control mt-4 w-24 ">
                             
                            <div className="form-control mt-6">
                           <input className="btn btn-primary" type="submit" value="Submit" />
                           </div>

                         </div>
              </form>

                
        </div>
    );
};

export default Reviews;