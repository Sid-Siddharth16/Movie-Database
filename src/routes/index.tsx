import { useRoutes } from 'react-router-dom';
import Home from '../pages/Home'
import MainLayout from '../Layout/Layout';
import ProtectedRoute from './ProtectedRoutes';
import NoLayout from '../Layout/NoLayout';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import UserDashboard from '../pages/UserDashboard';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Home />
        </MainLayout>
      ),
    },
    {
      path: '/login',
      element: (
        <NoLayout>
          <Login />
        </NoLayout>
      ),
    },
    {
      path: '/signup',
      element: (
        <NoLayout>
          <SignUp />
        </NoLayout>
      ),
    },
    {
      path: '/dashboard',
      element: (
        <ProtectedRoute>
          <MainLayout>
            <UserDashboard />
          </MainLayout>
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: (
        <NoLayout>
          <NotFound />
        </NoLayout>
      ),
    },
  ]);

  return routes;
};

export default AppRoutes;
