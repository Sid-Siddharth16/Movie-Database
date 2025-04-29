// import React from 'react';
import { RouteObject } from 'react-router-dom';
// import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
// import Login from '../pages/Login';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/abc',
    element: (
      <ProtectedRoute>
        //abc
      </ProtectedRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;