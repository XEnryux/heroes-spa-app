import React from 'react'
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeroesRoutes } from '../Heroes/routes/HeroesRoutes';

import { LoginPage } from '../auth'
import { DcPage, MarvelPage,SearchPage,HeroePage} from '../Heroes'
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';



const router = createBrowserRouter([
    {
      path:"/",
      element:<PrivateRouter><HeroesRoutes/>,</PrivateRouter> ,
      children:[
       
        {
            path: "/marvel",
            element: <MarvelPage/>,
          },
          {
            path: "/dc",
            element: <DcPage/>,
          },
          {
            path: "/search",
            element: <SearchPage/>,
          },
          {
            path: "/hero/:id",
            element: <HeroePage/>,
          
          },
          {
            path: "/",
            element: <Navigate to={"/marvel"}/>
          }

      ]
    },
    {
      path: "/login",
      element: <PublicRouter><LoginPage /></PublicRouter>,
    },
    // {
    //   path: "/*",
    //   element: <Navigate to={"/marvel"}/>
    // },
  ]);

export const AppRouter = () => {
  return (
    <>
    <RouterProvider router={router}/>

    </>
  )
}
