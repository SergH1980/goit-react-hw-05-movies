import { UserRoutes } from 'components/UserRoutes/UserRoutes';
import { NavLink } from 'react-router-dom';

import Header from 'components/Header/Header';

export default function App() {
  return (
    <div>
      <Header />
      <UserRoutes />
    </div>
  );
}
