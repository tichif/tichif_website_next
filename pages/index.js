import Image from 'next/image';

const clickHandler = () => {
  console.log('ok');
};

const HomePage = () => {
  return (
    <section className='home'>
      <img src='/images/home.jpg' alt='tichif' className='home-image' />
      <div className='home-content'>
        <h3>Dalzon Charles-Hébert</h3>
        <small>Fullstack web developer</small>
        <p>Description</p>
        <button className='btn' onClick={clickHandler}>
          <i className='fas fa-download'></i> Download
        </button>
      </div>
    </section>
  );
};

export default HomePage;
