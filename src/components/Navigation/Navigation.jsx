import useAuth from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/operation';
import {
  StyledNavLink,
  NavStyled,
  LiStyledLogin,
  LiStyledRegister,
} from './Navigation.styleds';

export const Navigation = () => {
  const dispatch = useDispatch();

  const { isLoggedIn } = useAuth();
  const logOut = () => {
    dispatch(signOut());
  };

  return (
    <>
      <NavStyled>
        {isLoggedIn ? (
          <button onClick={logOut}>LogOut</button>
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
