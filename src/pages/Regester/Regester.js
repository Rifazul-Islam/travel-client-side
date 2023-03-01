import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import SecretHook from '../../SecretHook/SecretHook';
import SeppenerPage from '../SeppenerPage/SeppenerPage';

const Regester = () => {

    SecretHook('Regester')
    const { haddlarCreateUser,UserProfile, loading} = useContext(AuthContext)
       
const navigate = useNavigate();
const location = useLocation();
const from = location.state?.from?.pathname || "/";

// handleSignUp Use 

 const handleSignUp = (event)=>{
 
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;


     
  // haddlarCreateUser Regester Mothed Use 

     haddlarCreateUser(email,password)  
     .then(result =>{
         const user = result.user;
         console.log(user)
         handlarProfileUpdate(name,PhotoURL)
      
         const presentUser = {

            email: user.email
        }

      fetch('https://travel-server-side.vercel.app/jwt',{

         method:'POST',
         headers:{

           'content-type': 'application/json'

         },

         body:JSON.stringify(presentUser)
      })

        .then(res => res.json())
        .then(data => {

                 
          toast.success(' create Token from Regester page')

             localStorage.setItem('token-best', data.token)
             navigate(from, { replace: true });

            
        })
     })
     .catch(err => toast.error(`${err}`));

   }

    // handlarProfileUpdate  name, and Picture Use 

   const handlarProfileUpdate =(name,PhotoURL) =>{

    const profile = {
           
       displayName : name,
       photoURL :PhotoURL 
    }

    return UserProfile (profile)
}


   if(loading){
      
      return <div> <SeppenerPage></SeppenerPage> </div>
   }

   return (
      
    <div className="hero w-full my-7">
    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
         <img className='w-3/4' src='https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="card-body">
           
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                </div>


                <div className="form-control">
                       <label className="label">
                        <span className="label-text"> your Name</span>
                       </label>
                      <input type="PhotoURL" name="PhotoURL" placeholder="Your Photo URL" className="input input-bordered" />
                 </div>


                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                    
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
            <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Sign In</Link> </p>
        </div>
    </div>
</div>
           
);
};

export default Regester;