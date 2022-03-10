import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Navigation from '../navigation';
import { toggleNavigation } from '../../../redux/actions/navigation';

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.navigation);

  const clickHandler = () => {
    setToggled((toggled) => !toggled);
    dispatch(toggleNavigation(!toggled));
  };

  return (
    <header>
      <div className='logo'>
        <img src='/images/logo.png' alt='logo' width='100px' />
      </div>
      <div
        className={`toggle${active ? ' active' : ''}`}
        onClick={clickHandler}
      ></div>
      <Navigation />
    </header>
  );
};

export default Header;
