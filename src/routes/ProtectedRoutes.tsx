import { Navigate } from 'react-router-dom';

interface Props {
  children: JSX.Element;
}

const isAuthenticated = (): boolean => {
  // Replace this with your actual auth check
  // return localStorage.getItem('token') !== null;
  return true;
};

const ProtectedRoute = ({ children }: Props) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
