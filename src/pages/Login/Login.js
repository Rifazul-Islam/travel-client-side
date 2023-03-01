import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext/AuthProvider';
import SecretHook from '../../SecretHook/SecretHook';
import SeppenerPage from '../SeppenerPage/SeppenerPage';

const Login = () => {
SecretHook('Login')
 const {handlarSogin, handlarGoogle, loading } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event)=>{
    
    event.preventDefault()
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

// handlarSogin Use 

    handlarSogin(email,password)
    .then(result =>{
      const user = result.user;
      console.log(user)
      navigate(from, { replace: true });

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

             toast.success('localStorage set token')
        

         localStorage.setItem('token-nest', data.token)

         navigate( from , { replace : true });
    })
})


  
  .catch(err => toast.error(`${err}`));
  
  }

// Google Login method use

  const googleLogin = ()=>{

    handlarGoogle()
    .then((result)=>{
        const user = result.user
        console.log(user)
        navigate(from, { replace: true });
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

               toast.success('localStorage set token')
          

           localStorage.setItem('token-nest', data.token)

          
      })
    
    })

    .catch((error)=>{
        console.error(error)
    })
  }


    if(loading){
      return <div> <SeppenerPage></SeppenerPage> </div>
    }
  return (
    <div className="hero w-full my-7 ">
    <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left"> 
          <img className='w-3/4 h-64' 
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbmIHrjRc-M4nQ_diFRZlOXpk_vkEnDrxSiApxDrFvursDBkBnFqpwbhaxjifU45t6s8c&usqp=CAU' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-7">
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                    <label className="label">
                     <span className="label-text">Email</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                     <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                    
                </div>
                <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
                </div>
            
            </form>
            
            <button onClick={googleLogin} className="btn btn-outline btn-accent w-3/4 mb-2 mx-auto"> <FaGoogle className='mr-3 text-2xl text-yellow-500'/>   Google with Login </button>
                    
            <p className='text-center'>New to Accout <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
        </div>
    </div>
  </div>
      );
};

export default Login;