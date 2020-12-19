import React from 'react'

import LevelItem from './LevelItem'

import styles from '../styles/components/LevelContainer.module.scss'
// import icon1 from '../assets/images/strong.png';
// import icon2 from '../assets/images/weak.png';

const LevelContainer = () => (
  <>
    <h1>¡AYUDANOS A UBICARTE!</h1>
    <div className={styles.container}>
      <LevelItem title="VALIDEMOS QUE SABES" description="Lorem ipsum dolor sit, amet consectetur adipisicing" />
      <LevelItem title="¡DEMUESTRANOS TU NIVEL!" description="Lorem ipsum dolor sit, amet consectetur adipisicing." />
    </div>
  </>
)

export default LevelContainer