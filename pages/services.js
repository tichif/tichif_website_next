import Layout from '../components/layout';

const Services = () => {
  return (
    <Layout title='Services'>
      <section>
        <div className='title'>
          <h1>The services I offer</h1>
          <p>
            I offer several services in the field of web development. Create
            your website, increase your online presence or quickly become a
            developer with a lower price.
          </p>
        </div>
        <div className='services'>
          <div className='service'>
            <div className='icon'>
              <i className='fas fa-code'></i>
            </div>
            <h2>Development</h2>
            <p>
              Create your website or web application using the latest
              technologies such as React, Express, Docker, Kubernetes, Mongo DB.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-server'></i>
            </div>
            <h2>Hosting</h2>
            <p>
              Deploy your website or web application on Digital Ocean, Heroku,
              Netlify hosting platforms.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-chart-line'></i>
            </div>
            <h2>SEO</h2>
            <p>
              Enhance your presence on the web thanks to search engine
              optimization methods.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-file-signature'></i>
            </div>
            <h2>Consultation</h2>
            <p>
              Opportunity study for the realization of website or web
              application.
            </p>
          </div>

          <div className='service'>
            <div className='icon'>
              <i className='fas fa-book'></i>
            </div>
            <h2>Formation</h2>
            <p>Online and face-to-face continuing education.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
