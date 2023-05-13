import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

export const Link = styled(LinkStyled)`
  font-size: 40px;
  padding-left: 40px;
  text-decoration: none;
  color: black;

  :hover {
    color: orange;
  }
`;
