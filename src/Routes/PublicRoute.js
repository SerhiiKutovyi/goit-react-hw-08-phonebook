import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};
