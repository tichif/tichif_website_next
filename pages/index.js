import { useRouter } from 'next/router';

import Layout from '../components/layout';

const clickHandler = () => {
  console.log('ok');
};

const HomePage = () => {
  const router = useRouter();

  const description =
    router.locale === 'en-US'
      ? 'A web developer looking for the opportunity to bring his skills and apply them in a work environment that will encourage him to progress and acquire new knowledge, with the intention of helping the company achieve its goals.'
      : "Un développeur web à la recherche de l'opportunité d'apporter ses compétences et de les appliquer dans un environnement de travail qui l'encouragera à progresser et à acquérir de nouvelles connaissances, dans l'intention d'aider l'entreprise à atteindre ses objectifs.";

  return (
    <Layout title={router.locale === 'en-US' ? 'Home' : 'Accueil'}>
      <section className='home'>
        <img src='/images/home.jpg' alt='tichif' className='home-image' />
        <div className='home-content'>
          <h3>Dalzon Charles-Hébert</h3>
          <small>Fullstack web developer</small>
          <p>{description}</p>
          <button className='btn' onClick={clickHandler}>
            <i className='fas fa-download'></i>{' '}
            {router.locale === 'en-US' ? 'Download CV' : 'Télécharger CV'}
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
