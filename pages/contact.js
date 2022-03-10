import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import Layout from '../components/layout';
import contactDefaultValue from '../validations/contactDefaultValues';
import contactSchema from '../validations/yupContactValidation';
import { contact } from '../redux/actions/contact';

const ContactPage = () => {
  const dispatch = useDispatch();

  const { loading, success, error, message } = useSelector(
    (state) => state.contact
  );
  return (
    <Layout title='Contactez moi'>
      <section>
        <div className='title'>
          <h1>Contactez moi</h1>
          <p>
            Contact me to get more information about the services I offer, to
            make an appointment, or just to say hello😉🙂🙋🏾‍♂️
          </p>
        </div>
        <div className='contact'>
          {loading ? (
            <Spinner />
          ) : (
            <div className='contact-form'>
              <Formik
                initialValues={contactDefaultValue}
                validationSchema={contactSchema}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  const language = 'en';
                  setSubmitting(true);
                  dispatch(
                    contact({
                      name: `${values.firstName} ${values.lastName}`,
                      email: values.email,
                      subject: values.subject || 'Un message de votre site',
                      message: values.message,
                      language,
                    })
                  );
                  resetForm();
                  setSubmitting(false);
                }}
              >
                {(props) => (
                  <Form>
                    <div className='row'>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='firstName'
                          placeholder='Firstname'
                        />
                        <ErrorMessage
                          name='firstName'
                          component='div'
                          className='error'
                        />
                      </div>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='lastName'
                          placeholder='Lastname'
                        />
                        <ErrorMessage
                          name='lastName'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input50'>
                        <Field type='email' name='email' placeholder='Email' />
                        <ErrorMessage
                          name='email'
                          component='div'
                          className='error'
                        />
                      </div>
                      <div className='input50'>
                        <Field
                          type='text'
                          name='subject'
                          placeholder='Subject'
                        />
                        <ErrorMessage
                          name='subject'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input100'>
                        <Field
                          name='message'
                          component='textarea'
                          placeholder='Message'
                        />
                        <ErrorMessage
                          name='message'
                          component='div'
                          className='error'
                        />
                      </div>
                    </div>
                    <div className='row'>
                      <div className='input100'>
                        <button type='submit'>Send</button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          )}
          <div className='contact-info'>
            <div className='info-box'>
              <img
                src='/images/address.png'
                alt='Address'
                className='contact-icon'
              />
              <div className='details'>
                <h4>Address</h4>
                <p>35, rue Chavannes Prol. Pétion-Ville, Haïti</p>
              </div>
            </div>
            <div className='info-box'>
              <img
                src='/images/email.png'
                alt='Email'
                className='contact-icon'
              />
              <div className='details'>
                <h4>Email</h4>
                <a href='mailto:contactme@tichif.com'>
                  contactme@tichif.com
                </a>{' '}
                <br />
                <a href='mailto:charleshebertdalzon@gmail.com'>
                  charleshebertdalzon@gmail.com
                </a>
              </div>
            </div>
            <div className='info-box'>
              <img src='/images/call.png' alt='Call' className='contact-icon' />
              <div className='details'>
                <h4>Phone</h4>
                <p>(+509) 47116485 / 48803395 / 35651206</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
