import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/components/Header.module.scss';



const Header = () => (
  <div className={styles.Header}>
    <h1 className={styles.HeaderTitle}>
      <Link to='/'>THE REZAGA 2</Link>
    </h1>
  </div>
  );

export default Header;
