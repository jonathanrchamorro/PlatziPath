import React from 'react';
import styles from '../styles/components/LevelItem.module.scss';

const LevelItem = ({ title, img, description }) => (
  <div className={styles.container}>
    <div className="textContainer">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    <div>
      <img src={img} alt="" />
    </div>
    <button type="button" className={styles.select}>Toma el examen</button>
  </div>
)

export default LevelItem
