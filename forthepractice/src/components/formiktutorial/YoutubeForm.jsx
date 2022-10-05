import {Formik, Form, Field, ErrorMessage, FieldArray} from 'formik';
import React from 'react';
import './turorail.css';

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comments: '',
  address: '',
  social: {
    facebook: '',
    twitter: '',
  },
  phonenumbers: ['', ''],
  phNumbers: [''],
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
  // console.log(errors);
  return errors;
};

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      <Form className="form-control">
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" autoComplete="off" />
        <ErrorMessage name="name" />
        <label htmlFor="email">E-mail</label>
        <Field type="email" name="email" id="email" autoComplete="off" />
        <ErrorMessage name="email" />

        <label htmlFor="channel">Channel</label>
        <Field
          type="text"
          name="channel"
          id="channel"
          autoComplete="off"
          placeholder="Youtube Channel Name"
        />
        <ErrorMessage name="channel" />
        {/*  creating text area for adding large text */}
        <label htmlFor="comments">Add Commets</label>
        <Field
          as="textarea"
          name="comments"
          id="comments"
          autoComplete="off"
          placeholder=" Add your comments here"
        />

        {/* rendering the field with the help of props will help in adding a custom components  in the form */}
        <label htmlFor="address"> Add Your Address </label>
        <Field name="address">
          {(props) => {
            const {field, form, meta} = props;
            // console.log("render Props:",props)
            return (
              <div>
                <input type="text" name="" id="address" {...field} />
                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
              </div>
            );
          }}
        </Field>

        {/* Nested object rendering to group together some data */}
        <div className="form-control-p">
          <label htmlFor="facebook">Facebook Profile</label>
          <Field type="text" id="facebook" name="social.facebook" />

          <label htmlFor="twitter">Twitter Profile</label>
          <Field type="text" id="twitter" name="social.twitter" />
        </div>
        {/* Adding contact details in an array */}
        <div className="form-control-p">
          <label htmlFor="primary">Primary Phone number </label>
          <Field type="number" name="phonenumbers[0]" id="primary" />

          <label htmlFor="secondary">Secondary Phone number </label>
          <Field type="number" name="phonenumbers[1]" id="secondary" />
        </div>

        {/* adding and deleting  multiple phone numbers dynamically  */}
        <div className="form-control-phNumbers">
          <label htmlFor="">List Of PhoneNumbers</label>
          <FieldArray name="phNumbers">
            {(fieldArrayProps, i) => {
              // console.log(fieldArrayProps);
              const {push, remove, form} = fieldArrayProps;
              const {values} = form;
              const {phNumbers} = values;

              return (
                <div key={i}>
                  {phNumbers.map((phNumbers, index) => (
                    <div key={index} className="form-control-phNumbers">
                      <Field name={`phNumbers[${index}]`} />
                      <div>
                        {index > 0 && (
                          <button type="button" onClick={() => remove(index)}>
                            Remove
                          </button>
                        )}
                        <button type="button" onClick={() => push()}>
                          Add
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm;
