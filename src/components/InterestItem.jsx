import React from 'react'
import styles from '../styles/components/InterestItem.module.scss';

const InterestItem = ({ title, img, description }) => {
  return (
    <div className={styles[`container${style}`]}>
      <h1>{title}</h1>
      <div className="imgContainer">
        <img src={img} alt=""/>
      </div>
      <div className="textContainer">
        <h2>Caracteristicas:</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default InterestItem
