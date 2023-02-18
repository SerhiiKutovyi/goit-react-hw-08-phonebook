import PropTypes from 'prop-types';
import useAuth from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
  redirectTo: PropTypes.string,
};
