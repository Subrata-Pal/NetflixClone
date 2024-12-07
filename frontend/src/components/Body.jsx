import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
function Body() {

    const appRoute = createBrowserRouter([{
        path: '/',
        element: <Login/>
      }, 
      {
        path: '/browse',
        element : <Browse/>
      }
    ])

  return (
    <div className='w-screen h-screen'>
    <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body