import React from 'react';

const Blog = () => {
    return (
<div className='mt-2'> 
 <div className="card mx-4 mt-2 bg-blue-300 text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-black text-2xl ">1. Difference between SQL and NoSQL ...?</h2>
    <p style={{fontSize:'18px'}} className='text-justify text-black'>SQL and NoSQL are two different types of databases that serve different purposes.SQL, which stands for Structured Query Language, is a type of database that uses tables with predefined schema to store data. It uses a relational model, where data is organized into tables that are related to each other through keys.NoSQL, on the other hand, stands for Not Only SQL. It is a type of database that is designed for unstructured or semi-structured data, where the relationships between data points may not be well-defined or may change frequently.</p>

  </div>
</div>

<div className="card mx-4 mt-2 bg-blue-300 text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-2xl text-black ">2. What is JWT, and how does it work ...?</h2>
    <p style={{fontSize:'18px'}} className='text-justify text-black'>JWT stands for JSON Web Token, and it is a standard for securely transmitting information between parties as a JSON object. JWTs are commonly used for authentication and authorization purposes in web applications and APIs.A JWT is composed of three parts: a header, a payload, and a signature. The header typically contains metadata about the token, such as the type of algorithm used for the signature. </p>

  </div>
</div>


<div className="card mx-4 mt-2  bg-blue-300 text-primary-content">
  <div className="card-body">
    <h2 className="card-title text-2xl text-black">3. What is the difference between javascript and NodeJS ...?</h2>
    <p style={{fontSize:'18px'}} className='text-justify text-black'>JavaScript and Node.js are both widely used technologies for web development, but they are not the same thing. Here are some key differences between JavaScript and Node.js.JavaScript is a programming language that runs in web browsers, while Node.js is a runtime environment that allows JavaScript to run on the server-side.In summary, JavaScript is a programming language used primarily for client-side scripting, while Node.js is a runtime environment that allows JavaScript to run on the server-side.</p>

  </div>
</div>


<div className="card mx-4 mt-2 bg-blue-300 text-primary-content">
  <div className="card-body ">
    <h2 className="card-title text-2xl text-black ">4. How does NodeJS handle multiple requests at the same time ...?</h2>
    <p style={{fontSize:'18px'}} className='text-justify text-black' >Node.js is designed to handle multiple requests at the same time in an efficient and scalable manner.When a request is received, Node.js creates an event loop that allows it to process other requests while waiting for the current request to complete. This is achieved through the use of asynchronous, non-blocking I/O operations, which allow Node.js to handle multiple requests without blocking the event loop.</p>

  </div>
</div>
        </div>
    );
};

export default Blog;