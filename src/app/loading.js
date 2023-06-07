import React from 'react'
import styles from './page.module.css'


const loading = () => {
  return (
    <div>
        <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default loading