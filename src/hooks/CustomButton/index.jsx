import React from 'react'
import styles from './Button.module.css'

const CustomButton = ({ children }) => {
  return (
    <button className={styles.btn}>{children}</button>
  )
}

export default CustomButton