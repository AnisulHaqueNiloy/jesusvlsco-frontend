import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import NotFound from "../pages/NotFound";

import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import Communication from "@/pages/Communication";
import User from "@/pages/User";
import Chats from "@/pages/Chats";
import Recognition from "@/pages/Recognition";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [



      {
        path: "/",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/communication",
        // Parent component
        children: [ // <-- Ekhane children array add korte hobe
          {
            path: "messages", // Full path will be /communication/messages
            element: <Chats></Chats>
          },
          {
            path: "recognition", // Full path will be /communication/notifications
            element: <Recognition></Recognition>
          }
          // Aro children routes lagle ekhane add kora jabe
        ]
      },
      {
        path: "/user",
        element: <User></User>
      },

    ],
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
