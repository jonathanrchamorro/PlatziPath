import React from 'react';
import styles from '../styles/components/Form.module.scss';

const Form = () => (
    <div className={styles.container}>
        <div className={styles.containerQuestion}>
            <h3 className={styles.Form}>Cual de las siguientes etiquetas crea un parrafo?</h3>
            <ol>
                <li>strong</li>
                <li>div</li>
                <li>h1</li>
                <li>li</li>
                <li>p</li>
            </ol>
        </div>
        <div className={styles.containerQuestion}>
            <h3 className={styles.Form}>La propiedad que cambia el peso de las fuenes es?</h3>
            <ol>
                <li>Bold</li>
                <li>Font-size</li>
                <li>Font-weight</li>
                <li>border</li>
                <li>Flex</li>
            </ol>
        </div>
    </div>
);

export default Form;
