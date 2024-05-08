import { createBrowserRouter } from "react-router-dom";
import Login from "./Pages/Login";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Legpics from "./Pages/Legpics";
import Post from "./Pages/Post";
import Profile from "./Pages/Profile";
import Signup from "./Pages/Signup";
import ProtectedRoutes from "./components/ProtectedRoutes";
export const router = createBrowserRouter([
    {
      element: <ProtectedRoutes/>,
      children: [
        {
          path: "/",
          element: <Home/>,
          errorElement: <Error/>,
        },
        {
          path: "/Error",
          element: <Error/>,
          errorElement: <Error/>,
        },
        {
          path: "/Home",
          element: <Home/>,
          errorElement: <Error/>,
        },
        {
          path: "/Legpics",
          element: <Legpics/>,
          errorElement: <Error/>,
        },
        {
          path: "/Post",
          element: <Post/>,
          errorElement: <Error/>,
        },
        {
          path: "/Profile",
          element: <Profile/>,
          errorElement: <Error/>,
        },
      ],
    },
    {
      path: "/Login",
      element: <Login/>,
      errorElement: <Error/>,
    },
    {
      path: "/Signup",
      element: <Signup />,
      errorElement: <Error />,
    },
  ]);
  
  export default router;
  