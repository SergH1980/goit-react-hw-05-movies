import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

import { ContainerStyled, MainStyled } from './Layout.styled';

export default function Layout() {
  return (
    <ContainerStyled>
      <Header />
      <MainStyled>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </MainStyled>
    </ContainerStyled>
  );
}
