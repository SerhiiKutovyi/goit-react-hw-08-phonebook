import {
  StyledNavLink,
  NavStyled,
  LiStyledLogin,
  LiStyledRegister,
} from './Navigation.styleds';

export const Navigation = () => {
  return (
    <>
      <NavStyled>
        <ul>
          <li>
            <StyledNavLink to="/"> Home</StyledNavLink>
          </li>
          <LiStyledLogin>
            <StyledNavLink to="/login"> Login</StyledNavLink>
          </LiStyledLogin>
          <LiStyledRegister>
            <StyledNavLink to="/register"> Register</StyledNavLink>
          </LiStyledRegister>
        </ul>
      </NavStyled>
    </>
  );
};
