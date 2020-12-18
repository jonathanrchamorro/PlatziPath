import React from 'react';
import styles from '../styles/components/Button.module.scss';

const Button = ({ children, title, onClick, style, disabled = false }) => (
  // eslint-disable-next-line react/button-has-type
  <button
    className={styles[`Button${style}`]}
    onClick={onClick}
    disabled={disabled}
    title={title}
  >
    {children}
  </button>
);

export default Button;
