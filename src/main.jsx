import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './copmponents/Main/Main.jsx';
import Home from './copmponents/Home/Home.jsx';
import Logine from './copmponents/Logine/Logine.jsx';
import Register from './copmponents/Register/Register.jsx';
import RegisterRB from './copmponents/RegisterRBT/RegisterRB.jsx';
import RegisterBS from './copmponents/RegisterBS/RegisterBS.jsx';


const router = createBrowserRouter([
  {
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'logine',
      element: <Logine></Logine>
    },
    {
      path: 'Register',
      element: <Register></Register>
    },
    {
      path: 'RegisterRBS',
      element: <RegisterRB></RegisterRB>
    },
    {
      path: 'RegisterBS',
      element: <RegisterBS></RegisterBS>
    }
  
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
