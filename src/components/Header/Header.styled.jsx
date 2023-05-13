import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const HeaderNav = styled.nav`
  margin-right: auto;
  margin-left: auto;
  width: 1980px;

  background-color: #f5f5ff;
  padding: 30px 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

export const NavLink = styled(NavLinkStyled)`
  font-size: 40px;
  padding-left: 40px;
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;
