import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="goit-react-hw-05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// ListItem.propTypes = {
//   resultArray: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       release_date: PropTypes.string.isRequired,
//       overview: PropTypes.string.isRequired,
//       poster_path: PropTypes.string,
//       vote_average: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
