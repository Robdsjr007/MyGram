import React from 'react'

import Facebook  from '@mui/icons-material/Facebook';

import styles from './EntrarFacebook.module.css'

const EntrarFacebook = ({color}) => {
    return (
        <div className={`${styles.faceText} ${color}`}>
            <Facebook fontSize="small" />
            <p>Entrar com o Facebook</p>
        </div>
    )
}

export default EntrarFacebook