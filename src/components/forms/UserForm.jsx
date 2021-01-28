import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import './UserForm.css';

export default class UserForm extends Component {

   constructor(props) {
      super(props);

   }


   render() {
      const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const password_pattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/i;

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

                  if (!values.password) {
                     errors.password = 'Password is required!';

                  } else if (!password_pattern.test(values.password)) {
                     errors.password = 'Password - minimum 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character!';

                  }

                  return errors;
               }}
               onSubmit={(values, { setSubmitting }) => {
                  setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                  }, 500);
               }}
            >
               {({ isSubmitting }) => (
                  <Form>
                     <div>
                        <Field
                           type='email'
                           name='email'
                           placeholder='email address'
                        />
                        <ErrorMessage name='email' component='span' />
                     </div>
                     <div>
                        <Field
                           type='password'
                           name='password'
                           placeholder='password'
                        />
                        <ErrorMessage name='password' component='span' />
                     </div>

                     <button type='submit' disabled={isSubmitting}>
                        Submit
                     </button>

                  </Form>
               )}

            </Formik>
         </div >
      );
   };
};
