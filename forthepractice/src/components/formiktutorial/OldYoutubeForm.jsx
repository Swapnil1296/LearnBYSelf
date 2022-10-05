import {useFormik} from 'formik';
import React from 'react';

const initialValues = {
  name: '',
  email: '',
  channel: '',
};
const onSubmit = (values) => {
  console.log(values);
};
const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name Requier';
  }
  if (!values.email) {
    errors.email = 'Email Require';
  } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
    errors.email = 'Invalid Email Format';
  }
  if (!values.channel) {
    errors.channel = 'Channel Require';
  }
  console.log(errors);
  return errors;
};

const OldYoutubeForm = () => {
  const {handleChange, values, handleSubmit, errors, handleBlur, touched} =
    useFormik({
      initialValues: initialValues,
      onSubmit: onSubmit,
      validate: validate,
    });
  // console.log("values are:-",values)
  return (
    <div style={{width: '300px', border: '2px solid blue'}}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          margin: '5px',
          fontSize: '20px',
          fontWeight: 'bold',
          gap: '5px',
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
        {touched.name && errors.name ? (
          <div style={{fontSize: '10px', color: 'red'}}>{errors.name}</div>
        ) : null}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {touched.email && errors.email ? (
          <div style={{fontSize: '10px', color: 'red'}}>{errors.email}</div>
        ) : null}
        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          name="channel"
          id="channel"
          autoComplete="off"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.channel}
        />
        {touched.channel && errors.channel ? (
          <div style={{fontSize: '10px', color: 'red'}}>{errors.channel}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default OldYoutubeForm;
