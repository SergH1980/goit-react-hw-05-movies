import { HeaderNav, NavLink } from './Header.styled';

export default function Header() {
  return (
    <HeaderNav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </HeaderNav>
  );
}
