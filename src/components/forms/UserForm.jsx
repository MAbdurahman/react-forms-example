import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './UserForm.css';

export default class UserForm extends Component {
   constructor(props) {
      super(props);

   }

   render() {
      // const email_pattern = /^[A-Za-z\.\-_0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
      const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

      return (
         <div className='contact-form'>
            <h2>Contact Form</h2>
            <Formik
               initialValues={{ email: '', password: '' }}
               validate={values => {
                  let errors = {};
                  if (!values.email) {
                     errors.email = 'Email is required!';

                  } else if (!email_pattern.test(values.email)) {
                     errors.email = 'Invalid email address!';
                  }
                  return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                  }, 400);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <div>
                        <Field type='email' name='email' fullWidth />
                        <ErrorMessage name='email' component='span' />
                     </div>
                     <div>
                        <Field type='password' name='password' fullWidth />
                        <Field type='password' component='span' />
                     </div>

                     <button type='submit' disabled={isSubmitting} fullWidth>
                        Submit
                     </button>

                  </Form>
               )}

            </Formik>
         </div>
      );
   };
};
