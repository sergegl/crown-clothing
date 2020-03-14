import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

const Header = ({ currentUser }) => {
  const signOut = (event) => {
    event.preventDefault();
    auth.signOut();
  }

  return (
    <div className='header'>
      <Link to='/' className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>SHOP</Link>
        <Link className='option' to='/contact'>CONTACT</Link>
        {
          currentUser
            ? <a href='/' className='option' onClick={signOut}>SIGN OUT</a>
            : <Link className='option' to='/signin'>SIGN IN</Link>
        }
      </div>
    </div>
  );
}

export default Header;