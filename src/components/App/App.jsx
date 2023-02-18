import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { resetContactsState } from '../../redux/contacts/slice';
import { getCurrentUser } from 'redux/auth/operation';
import AppRoutes from 'Routes/AppRoutes';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(resetContactsState());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch, isLoggedIn]);

  return (
    <>
      <AppRoutes />
    </>
  );
};
