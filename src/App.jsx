import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";
import Navbar from "./UI/Navbar";
import Calls from "./UI/Calls";
import Status from "./UI/Status";
import Profile from "./UI/Profile";
import RightBar from "./UI/RightBar";
import Chats from "./UI/Chats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Chats />,
      },
      {
        path: "calls",
        element: <Calls />,
      },
      {
        path: "status",
        element: <Status />,
      },
      {
        path: "Profile",
        element: <Profile />,
      },
      {
        path: "chats/:id",
        element: <RightBar />,
      },
    ],
  },
  {
    path: "/login",
    element: <Loginpage />,
  },
  {
    path: "/signup",
    element: <Signuppage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
