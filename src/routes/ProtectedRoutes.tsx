import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRouteProps> = ({ children }) => {
  // const { authState } = useAuth();
  const isAuthenticated = localStorage.getItem('user') !== null; 
  const location = useLocation();

  // if (!authState.isAuthenticated) {
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoutes;