import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  margin-bottom: 20px;
  text-decoration: none;
  display: block;
  font-size: 24px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: bold;

  color: black;

  &.active {
    color: coral;
  }
`;

export const NavStyled = styled.nav`
  margin-top: 20px;
  margin-bottom: 5px;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  ul {
    display: flex;
    margin-left: 20px;
  }

  li {
    display: block;
  }
`;

export const LiStyledLogin = styled.li`
  margin-left: auto;
  margin-right: 20px;
`;
export const LiStyledRegister = styled.li`
  margin-left: 20px;
`;
