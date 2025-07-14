import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import AppLayout from "./UI/AppLayout";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    id: "root",
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
