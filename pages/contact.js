import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import Layout from '../components/layout';
import Spinner from '../components/layout/Spinner';
import contactDefaultValue from '../validations/contactDefaultValues';
import contactSchema from '../validations/yupContactValidation';
import { contact, clearNotifications } from '../redux/actions/contact';

const ContactPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { loading, success, error, message } = useSelector(
    (state) => state.contact
  );

  useEffect(() => {
    if (error) {
      toast.error();
      dispatch(clearNotifications());
    } else if (success) {
      toast.success(message);
    }
  }, [error, success]);

  return (
    <Layout title='Contactez moi'>
      <section>
        <div className='title'>
          <h1>{router.locale === 'en-US' ? 'Contact me' : 'Contactez moi'}</h1>
          <p>
            {router.locale === 'en-US'
              ? 'Contact me to get more information about the services I offer, to make an appointment, or just to say hello😉🙂🙋🏾‍♂️'
              : "Ecrivez moi pour avoir plus d'informations sur les services que j'offre, pour prendre rendez-vous, ou tout simplement pour me dire bonjour 😉🙂🙋🏾"}
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
                  const language = router.locale === 'en-US' ? 'en' : 'fr';
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
                  if (success) {
                    resetForm();
                  }
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
                          placeholder={
                            router.locale === 'en-US' ? 'Firstname' : 'Prénom'
                          }
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
                          placeholder={
                            router.locale === 'en-US' ? 'Lastname' : 'Nom'
                          }
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
                          placeholder={
                            router.locale === 'en-US' ? 'Subject' : 'Sujet'
                          }
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
                        <button type='submit'>
                          {router.locale === 'en-US' ? 'Send' : 'Envoyer'}
                        </button>
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
                <h4>{router.locale === 'en-US' ? 'Address' : 'Adresse'}</h4>
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
                <h4>{router.locale === 'en-US' ? 'Phone' : 'Téléphone'}</h4>
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
