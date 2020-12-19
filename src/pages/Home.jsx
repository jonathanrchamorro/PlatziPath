/* eslint-disable no-undef */
import React from 'react';
import styles from '../styles/components/Home.module.scss'
// import Button from '../components/Button'

const Home =() => (

  <>
    <div className={styles.Main}>
      <h1>Seleciona tú Interes</h1>

      <div className={styles.ContainerFront}>
        <img src="" alt="Frontend" />
        <p> El Front end es la parte de una web que conecta e interactúa con los usuarios que la visitan. Es la parte visible, la que muestra el diseño, los contenidos y la que permite a los visitantes navegar por las diferentes páginas mientras lo deseen.</p>
      </div>

      <div className={styles.ContainerBack}>
        <img src="" alt="Backend" />
        <p>Un desarollador Backend es un programador que trabaja del lado del servidor. Permitiendo que todo lo que vemos cuando interactuamos con una aplicación o sitio web, funcione. ... Además de lenguajes de programación, el Backend necesita conocer las interacciones con diferentes bases de datos.</p>
      </div>

      <div className={styles.ContainerDatasaience}>
        <img src="" alt="DataSaience" />
        <p>Data Science combina la estadística, las matemáticas y la informática para interpretar datos. El objetivo es tomar decisiones.</p>
      </div>

      <div className={styles.ContainerUxUi}>
        <img src="" alt="UX/UI" />
        <p>UX es lo qué te hace sentir una marca o producto al momento de interactuar con él, mientras que UI es una capa visual de colores, texturas, formas y elementos.</p>
      </div>

    </div>
  </>
  )

export default Home;
