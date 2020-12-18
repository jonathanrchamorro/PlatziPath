/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from '../styles/components/Label.module.scss';

const Label = ({ children, href, style }) => (
  <div>
    <label
      // className={styles.Label}
      className={`${styles.Label} ${style && styles[`Label${style}`]}`}
      href={href}
    >
      {children}
    </label>
  </div>
);

export default Label;
