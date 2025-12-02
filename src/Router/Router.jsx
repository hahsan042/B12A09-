import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/ Login";
import About from "../Pages/About";
import Register from "../Pages/Register";
import AllGames from "../Pages/AllGames";
import gameDetails from "../Pages/GameDetails";
import GameDetails from "../Pages/GameDetails";
import PrivateRoute from "../privateRouter/PrivateRoute";
import NotFound from "../Pages/NotFound";
import UpdateProfile from "../Pages/UpdateProfile";
import PasswordForgot from "../Pages/PasswordForgot";


export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children: [
    {
      index:true,
      Component:Home
    },
    {
      path: "/login",
      Component : Login,
    },
      {
      path: "/register",
      Component : Register,
    },
    {
      path: "/about",
      Component : About,
    },
        {
      path: "/allgames",
      Component : AllGames,
    },
        {
      path: "/gamerdetails/:id",
      element : <PrivateRoute><GameDetails/></PrivateRoute>,
    },
      {
        path: "*",
        Component: NotFound,
      },
      {
  path: "/UpdateProfile",
  element:<PrivateRoute> <UpdateProfile /></PrivateRoute>,
},

{
  path:"/forget-password",
  Component:PasswordForgot,
}
  ]
  },
]);