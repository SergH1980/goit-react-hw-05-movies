import styled from 'styled-components';
import { Link as LinkStyled } from 'react-router-dom';

export const emptyArray = styled.div`
  font-size: 20px;
`;

export const Link = styled(LinkStyled)`
  font-size: 40px;

  text-decoration: none;
  color: black;

  :hover {
    color: orange;
  }
`;
