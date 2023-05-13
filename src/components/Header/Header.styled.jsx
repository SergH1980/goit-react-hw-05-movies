import styled from 'styled-components';
import { NavLink as NavLinkStyled } from 'react-router-dom';

export const HeaderNav = styled.nav`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;

  background-color: #f5f5ff;
  padding: 30px 16px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const NavLink = styled(NavLinkStyled)`
  font-size: 40px;
  text-decoration: none;
  color: black;

  &.active {
    color: orange;
  }
`;
