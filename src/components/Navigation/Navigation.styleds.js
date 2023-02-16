import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

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
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);

  ul {
    padding: 20px;
    display: flex;
  }

  li {
    display: block;
  }

  button {
    margin-left: 90%;
    margin-top: 20px;
    margin-bottom: 20px;

    border: none;
    padding: 5px 15px;

    cursor: pointer;

    border-radius: 4px;
    background-color: coral;
    color: white;
  }
`;

export const LiStyledLogin = styled.li`
  margin-left: auto;
`;
export const LiStyledRegister = styled.li`
  margin-left: 20px;
  margin-right: 20px;
`;
