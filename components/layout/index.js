import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './header';

const Layout = ({ children, title = 'Tichif' }) => {
  return (
    <>
      <Head>
        <title>{title} | Tichif</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      {children}
      <ToastContainer position='bottom-right' />
    </>
  );
};

export default Layout;
