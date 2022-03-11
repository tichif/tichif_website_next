import { useRouter } from 'next/router';

import Layout from '../components/layout';

const Services = () => {
  const router = useRouter();
  return (
    <Layout title='Services'>
      <section>
        <div className='title'>
          <h1>
            {router.locale === 'en-US'
              ? 'The services I offer'
              : "Les services que j'offre"}
          </h1>
          <p>
            {router.locale === 'en-US'
              ? 'I offer several services in the field of web development. Create your website, increase your online presence or quickly become a developer with a lower price.'
              : "J'offre plusieurs services dans le domaine du développement web. Créer votre site web, augment votre présence en ligne ou devenez rapidement un développeur grace aux prix imbattables sur le marché."}
          </p>
        </div>
        <div className='services'>
          <div className='service'>
            <div className='icon'>
              <i className='fas fa-code'></i>
            </div>
            <h2>
              {' '}
              {router.locale === 'en-US' ? 'Development' : 'Développement'}
            </h2>
            <p>
              {router.locale === 'en-US'
                ? 'Create your website or web application using the latest technologies such as React, Express, Docker, Kubernetes, Mongo DB.'
                : 'Création de votre site ou application web en utilisant les dernières technologies telles que React, Express, Docker, Kubernetes, Mongo DB.'}
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-server'></i>
            </div>
            <h2> {router.locale === 'en-US' ? 'Hosting' : 'Hébergement'}</h2>
            <p>
              {router.locale === 'en-US'
                ? 'Deploy your website or web application on Digital Ocean, Heroku, Netlify hosting platforms.'
                : "Déploiement de votre site ou application web sur les plateformes d'hébergement Digital Ocean, Heroku, Netlify."}
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-chart-line'></i>
            </div>
            <h2> {router.locale === 'en-US' ? 'SEO' : 'SEO'}</h2>
            <p>
              {router.locale === 'en-US'
                ? 'Enhance your presence on the web thanks to search engine optimization methods.'
                : "Renforcement de votre présence sur le web grace aux méthodes de référencement et d'optimisation."}
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-file-signature'></i>
            </div>
            <h2>
              {' '}
              {router.locale === 'en-US' ? 'Consultation' : 'Consultation'}
            </h2>
            <p>
              {router.locale === 'en-US'
                ? 'Opportunity study for the realization of website or web application.'
                : "Etude d'opportunité pour la réalisation de site ou d'application web."}
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-book'></i>
            </div>
            <h2> {router.locale === 'en-US' ? 'Formation' : 'Formation'}</h2>
            <p>
              {' '}
              {router.locale === 'en-US'
                ? 'Online and face-to-face continuing education.'
                : 'Formation continue en ligne et en présentielle.'}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
