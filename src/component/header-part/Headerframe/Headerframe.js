import React from 'react'
import styles from './Headerframe.module.css'

const Headerframe = (props) => {
    return (
        <div className={styles.header}>
          <h1>{props.title}</h1>  
        </div>
    )
}


export default Headerframe

