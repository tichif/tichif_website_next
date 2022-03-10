import Image from 'next/image';

import Layout from '../components/layout';

const Portfolio = () => {
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
          <h1>Some of my best work</h1>
          <p>
            Using the best possible technologies, my priority is to completely
            satisfy my clients by approaching each project with professionalism,
            dedication. Click on each project in to get an overall idea of it.
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
              {/* <img src={item.image} alt={item.name} /> */}
              <div className='action'>
                <a
                  href={item.link}
                  target='_blank'
                  onClick={() => onClickHandler(item)}
                  rel='noopener noreferrer'
                >
                  Visit
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
