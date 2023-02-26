
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App mx-4 mt-2">
     
         <RouterProvider router={router}>

         </RouterProvider>
         <Toaster/>
    </div>
  );
}

export default App;
