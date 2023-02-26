import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import SecretHook from '../../SecretHook/SecretHook';

const AddService = () => {
      SecretHook('AddService')
    const [service, setService] = useState({})

    const handlarSummit = event =>{

        event.preventDefault();

        console.log(service)
        event.target.reset()

        fetch('http://localhost:5000/services',{
         
          method:'POST',
          headers:{
              'content-type': 'application/json'
          },
          body : JSON.stringify(service)

        })

        .then(res => res.json())
        .then(data => {

            if(data.acknowledged){

                 toast.success('your comipled send data', data)
            }
        })

  }

  const handlarBlur = event=>{

    const field = event.target.name;
    const value = event.target.value;
  //   console.log(field,value)
  
     const newService = {...service}
     newService[field] = value;
       setService(newService)
      event.target.reset(newService)

}

    return (
<div>

<div className=' mt-2  w-1/2 bottom-1 bg-blue-200 mx-auto text-center ' style={{height:'400px'}} >
<h5 className='text-center text-2xl mb-3'> Add Service ...</h5>
<form  onSubmit={handlarSummit} >

<input onBlur={handlarBlur}  type="text" name='name' placeholder='Service name' className="input input-bordered w-full max-w-xs" /><br/><br/>
<input onBlur={handlarBlur}   type="text" name='img'  placeholder='Service photo url' className="input input-bordered w-full max-w-xs" /><br/><br/>
<input  onBlur={handlarBlur}  type="text" name='discripe'  placeholder='Service discripetion' className="input input-bordered w-full max-w-xs" /><br/><br/>
<input onBlur={handlarBlur}  type="text" name='Price'  placeholder='Service price' className="input input-bordered w-full max-w-xs" /><br/><br/>
<input type="submit" value="Submit" className="btn btn-primary input input-bordered w-full max-w-xs" />
</form>
</div>

</div>
    );
};

export default AddService;