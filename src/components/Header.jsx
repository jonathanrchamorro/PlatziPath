import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.module.scss';

const Header = () => (
  <div className='Header'>
    <h1 className='Header-title'>
      <Link to='/'>PlatziPath</Link>
    </h1>      
  </div>
  );

export default Header;
