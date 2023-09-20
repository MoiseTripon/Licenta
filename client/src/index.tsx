import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './index.css';
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Navigate to='/login' replace/>
      },
      {
        path: "login",
        element: <Login />,
        //loader: loginLoader,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        //loader: dashboardLoader,
      },
    ],
  },
]);

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}
