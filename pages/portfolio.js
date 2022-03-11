import Image from 'next/image';
import { useRouter } from 'next/router';

import Layout from '../components/layout';

const Portfolio = () => {
  const router = useRouter();
  const works = [
    {
      name: 'TK Boutique',
      image: '/images/tkboutique.jpg',
      link: 'https://www.tkboutiquehaiti.com',
    },
    {
      name: 'Mariage',
      image: '/images/mariage.jpg',
      link: 'https://roosendjude.com',
    },
    {
      name: 'Mariage',
      image: '/images/mariage2.jpg',
      link: 'https://roosendjude.com/weeding/index.html',
    },
    {
      name: 'Tandou Birthday',
      image: '/images/tandou.jpg',
      link: 'https://tandou.netlify.app/',
    },
    {
      name: 'Happy Valentines',
      image: '/images/valentines.png',
      link: 'https://tandou-valentines.netlify.app/',
    },
    {
      name: 'Emaily',
      image: '/images/emaily.png',
      link: 'https://nameless-springs-02522.herokuapp.com/',
    },
    {
      name: 'Contact Keeper',
      image: '/images/contact-keeper.png',
      link: 'https://greve-choucroute-70628.herokuapp.com/',
    },
  ];

  const onClickHandler = () => {
    console.log('Ok');
  };

  return (
    <Layout title='Porfolio'>
      <section>
        <div className='title'>
          <h1>
            {router.locale === 'en-US'
              ? 'Some of my best work'
              : 'Certains de mes meilleurs travaux'}
          </h1>
          <p>
            {router.locale === 'en-US'
              ? 'Using the best possible technologies, my priority is to completely satisfy my clients by approaching each project with professionalism, dedication. Click on each project in to get an overall idea of it.'
              : 'En utilisant les meilleurs technologies possibles, ma priorité est de satisfaire complètement mes clients en abordant chaque projet avec professionalisme, dévouement. Cliquez sur le projet en question pour avoir une idée globale sur celui-ci.'}
          </p>
        </div>

        <div className='portfolio'>
          {works.map((item, i) => (
            <div className='item' key={i}>
              <Image
                src={item.image}
                alt={item.name}
                width='300'
                height='180'
              />
              <div className='action'>
                <a
                  href={item.link}
                  target='_blank'
                  onClick={() => onClickHandler(item)}
                  rel='noopener noreferrer'
                >
                  {router.locale === 'en-US' ? 'Visit' : 'Visiter'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
