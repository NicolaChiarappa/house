import Home from "./screen/Home";
import BuddyPage from "./screen/BuddyPage";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buddy",
    element: <BuddyPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];
