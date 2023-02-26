import React from 'react';

const Comments = ({user}) => {

    const {name, message, service} = user;
    console.log(user)
    return (
        <div className='ml-4'>
              <h1 className='text-2xl'> Name :  {name} </h1>
               <p> {message} </p>
               <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={service.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
          </div>
        </div>
    );
};

export default Comments;