import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { toggleNavigation } from '../../../redux/actions/navigation';

const Navigation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { active } = useSelector((state) => state.navigation);

  const clickHandler = () => {
    dispatch(toggleNavigation(false));
  };

  const changeLocal = (local) => {
    router.push(
      { pathname: router.pathname, query: router.query },
      router.asPath,
      {
        locale: local,
      }
    );
  };

  return (
    <>
      <div className={`navigation${active ? ' active' : ''}`}>
        <ul>
          <li>
            <Link href='/'>
              <a onClick={clickHandler}>
                {router.locale === 'en-US' ? 'Home' : 'Accueil'}
              </a>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <a onClick={clickHandler}>
                {router.locale === 'en-US' ? 'Services' : 'Services'}
              </a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <a onClick={clickHandler}>
                {router.locale === 'en-US' ? 'Portfolio' : 'Portfolio'}
              </a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a onClick={clickHandler}>
                {router.locale === 'en-US' ? 'Contact' : 'Contact'}
              </a>
            </Link>
          </li>
        </ul>
        <div className='social-bar'>
          <ul>
            <li>
              <a
                href='https://github.com/tichif'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/images/github.png' alt='github' />
              </a>
            </li>
            <li>
              <a
                href='https://twitter.com/TichifJS'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/images/twitter.png' alt='twitter' />
              </a>
            </li>
            <li>
              <a
                href='https://www.instagram.com/tichif.js'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/images/instagram.png' alt='instagram' />
              </a>
            </li>
            <li>
              <a
                href='https://www.youtube.com/channel/UCjYdzbmiEptw8aVKpNVOqjA'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='/images/youtube.png' alt='youtube' />
              </a>
            </li>
          </ul>
          <ul className='lang-icon'>
            <li>
              <img
                src='/images/french.png'
                alt='french'
                onClick={() => changeLocal('fr')}
              />
            </li>
            <li>
              <img
                src='/images/usa.png'
                alt='usa'
                onClick={() => changeLocal('en-US')}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
