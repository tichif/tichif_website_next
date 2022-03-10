import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { toggleNavigation } from '../../../redux/actions/navigation';

const Navigation = () => {
  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.navigation);

  const clickHandler = () => {
    dispatch(toggleNavigation(false));
  };

  return (
    <>
      <div className={`navigation${active ? ' active' : ''}`}>
        <ul>
          <li>
            <Link href='/'>
              <a onClick={clickHandler}>Accueil</a>
            </Link>
          </li>
          <li>
            <Link href='/services'>
              <a onClick={clickHandler}>Services</a>
            </Link>
          </li>
          <li>
            <Link href='/works'>
              <a onClick={clickHandler}>Portfilio</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a onClick={clickHandler}>Contact</a>
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
              <img src='/images/french.png' alt='french' />
            </li>
            <li>
              <img src='/images/usa.png' alt='usa' />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
