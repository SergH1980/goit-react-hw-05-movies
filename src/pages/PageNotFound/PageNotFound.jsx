import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="errorWrap">
      <p>There is no page to show.</p>
      <p>Please use site navigation or press</p>
      <Link className="errorLink" to="/">
        <button className="errorButton">THIS BUTTON</button>
      </Link>
      <p>to return to homepage.</p>
    </div>
  );
}
