import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'

import React from 'react'

const Header = () => {
  return (
    <div className={styles.red}>
        <Link href="/">
            <Image 
            src="/logo.png"
            className={styles.logo}
            alt="" height={100} width={80} />
        </Link>
        <div className={styles.contents}>
            <Link href="/about" className={styles.cc}>About</Link>
            <Link href="/services" className={styles.cc}>Services</Link>
            <Link href="/contact" className={styles.cc}>Contact</Link>
        </div>
      
    </div>
  )
}

export default Header