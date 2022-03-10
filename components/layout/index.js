import Head from 'next/head';

import Header from './header';

const Layout = ({ children, title = 'Tichif' }) => {
  return (
    <>
      <Head>
        <title>{title}| Tichif</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default Layout;
