import React from 'react';

const Comments = ({user}) => {

    const {name, message} = user;
    console.log(user)
    return (
        <div className='ml-4'>
              <h1 className='text-2xl'> Name :  {name} </h1>
               <p> {message} </p>
        </div>
    );
};

export default Comments;