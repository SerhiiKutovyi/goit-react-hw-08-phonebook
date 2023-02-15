import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getCurrentUser } from 'redux/operation';
import AppRoutes from 'Routes/AppRoutes';

export const App = () => {
  const dispatch = useDispatch();
  // const { isLoggedIn } = useAuth();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <AppRoutes />
    </>
  );
};
