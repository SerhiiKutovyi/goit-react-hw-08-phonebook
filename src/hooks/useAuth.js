import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectToken,
  selectIsRefreshing,
} from 'redux/auth/selector';

export default function useAuth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    user,
    token,
    isRefreshing,
  };
}
