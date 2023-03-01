import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../pages/AddService/AddService";
import Blog from "../pages/Blog/Blog";
import Details from "../pages/Details/Details";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Regester from "../pages/Regester/Regester";
import Review from "../pages/Review/Review";
import Reviews from "../pages/Review/Reviews";
import Services from "../pages/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const router = createBrowserRouter([
    {path:'/', element:<Main></Main>, children:[
      {path:'/', element:<Home></Home>}, 
      {path:'/services', element:<Services></Services>},
      {path:'/detailService/:id', element:<Details></Details>,
       loader:({params}) => fetch(`https://travel-server-side.vercel.app/services/${params.id}`)
    },

    {path:'/register', element: <Regester></Regester>},
    {path:'/login', element: <Login></Login>},
    {path:'/blog', element: <Blog></Blog> },
    {path:'/reviews/:id',element:<Reviews></Reviews>,
    loader:({params}) => fetch(`https://travel-server-side.vercel.app/reviews/${params.id}`)
  },
    {path:'/review', element: <PrivateRoute><Review></Review></PrivateRoute> },
    {path:'/addService', element: <PrivateRoute><AddService></AddService></PrivateRoute>}
      
       
      
    ]}

])