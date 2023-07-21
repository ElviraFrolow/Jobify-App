import React from 'react'
import {HomeLayout, Register, DashBoardLayout, Login, Error, Landing} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
  path: '/',
  element: <HomeLayout/>,
  errorElement: <Error/>,
  children: [
    {
      index: true,
      element: <Landing/>
    },
    {
      path: '/register',
      element: <Register/>,
    },
      {
      path: '/dashboard',
      element: <DashBoardLayout/>,
    },
      {
      path: '/login',
      element: <Login/>,
    },
  ]
},

]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
