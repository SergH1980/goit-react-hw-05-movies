// import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import './Searchbar.css';

let schema = yup.object().shape({ query: yup.string().min(1) });

export default function SearchBar({ onSearch }) {
  function handleSubmit(values) {
    onSearch(values);
  }
  return (
    <div>
      <h2 className="searchbarHeader">Movie search form</h2>
      <Formik
        initialValues={{
          query: '',
        }}
        validationSchema={schema}
        onSubmit={values => {
          handleSubmit(values.query);
        }}
      >
        <Form>
          <Field
            className="searchbarInput"
            id="query"
            name="query"
            placeholder="Please enter your query"
          />
          <button type="submit" className="searchbarButton">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
