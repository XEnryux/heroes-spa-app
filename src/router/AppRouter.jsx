import React from 'react'
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HeroesRoutes } from '../Heroes/routes/HeroesRoutes';

import { LoginPage } from '../auth'
import { DcPage, MarvelPage,SearchPage,HeroePage,AllHeroes} from '../Heroes'
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';


AllHeroes



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
            element:<AllHeroes/>
          },
          {
            path: "/*",
            element: <Navigate to={"/"}/>
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
