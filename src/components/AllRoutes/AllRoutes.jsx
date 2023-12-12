import {
    createBrowserRouter,
  } from "react-router-dom";
import MainHome from "../layout/MainHome";
import Home from "../Home/Home";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainHome></MainHome>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        }
      ]
    },
  ]);

  export default router;