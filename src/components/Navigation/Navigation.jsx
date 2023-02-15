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
    <div
      className={{
        display: 'flex',
        'align-items': 'center',
        'justify-content': 'center',
      }}
    >
      <StyledNavLink to="/"> Home</StyledNavLink>
      <NavStyled>
        {isLoggedIn ? (
          <button onClick={logOut}>LogOut</button>
        ) : (
          <ul>
            <LiStyledLogin>
              <StyledNavLink to="/login"> Login</StyledNavLink>
            </LiStyledLogin>
            <LiStyledRegister>
              <StyledNavLink to="/register"> Register</StyledNavLink>
            </LiStyledRegister>
          </ul>
        )}
      </NavStyled>
    </div>
  );
};
