import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext/AuthProvider';

const PrivateRoute = ({children}) => {

      const {user,loading} = useContext(AuthContext)
      const location = useLocation;


      if(loading){

        return <div className='d-flex justify-content-center mt-5 mx-auto text-center' > Loading ...</div>
    }
        
      if(user?.email){

        return children;
     }
        
     return <Navigate to='/login' state={{ from : location }} replace />
    
     
    };


export default PrivateRoute;