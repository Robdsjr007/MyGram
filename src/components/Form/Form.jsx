import React from 'react'
import styles from './Form.module.css'

const Form = ({children, event}) => {
    return (
        <form onSubmit={event} className={styles.form}>
            <h1>Mygram</h1>
            {children}
        </form>
    )
}

export default Form