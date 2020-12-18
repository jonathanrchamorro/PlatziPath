import React from 'react';
import styles from '../styles/components/Layout.module.scss';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <main className={styles.Main}>{children}</main>
    <Footer />
  </>
  );

export default Layout;
