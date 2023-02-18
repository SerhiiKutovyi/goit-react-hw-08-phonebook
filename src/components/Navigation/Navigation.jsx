import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/auth/operation';
import {
  StyledNavLink,
  NavStyled,
  LiStyledLogin,
  LiStyledRegister,
} from './Navigation.styleds';

export const Navigation = () => {
  // const username = useSelector(selectUser);
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useAuth();
  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <NavStyled>
        {isLoggedIn ? (
          <div>
            <span>{user.name}</span>
            <button onClick={logOut}>LogOut</button>
          </div>
        ) : (
          <ul>
            <StyledNavLink to="/"> Home</StyledNavLink>
            <LiStyledLogin>
              <StyledNavLink to="/login"> Login</StyledNavLink>
            </LiStyledLogin>
            <LiStyledRegister>
              <StyledNavLink to="/register"> Register</StyledNavLink>
            </LiStyledRegister>
          </ul>
        )}
      </NavStyled>
    </>
  );
};
