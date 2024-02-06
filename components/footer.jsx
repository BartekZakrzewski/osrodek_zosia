import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'
import { MdLocationPin, MdEmail, MdLocalPhone, MdFacebook } from "react-icons/md"
import { AiFillPushpin, AiFillMail, AiFillPhone, AiFillFacebook, AiFillYoutube } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className={styles.footer} id='kontakt'>
      <Link href={'epicgames.com'} className={`${styles.link} ${styles.pin}`}>
        <MdLocationPin />
        <span className={styles.text}>57a, 74-100 Borzym</span>
      </Link>
      <Link href={''} className={`${styles.link} ${styles.mail}`}>
        <MdEmail />
        <span className={styles.text}></span>
      </Link>
      <Link href={'tel:+48510105465'} className={`${styles.link} ${styles.phone}`}>
        <AiFillPhone />
        {/* <span className={styles.text}>+48 510 105 465</span> */}
      </Link>
      <Link href={''} className={`${styles.link} ${styles.fb}`}>
        <MdFacebook />
        <span className={styles.text}>Facebook</span>
      </Link>
      <Link href={''} className={`${styles.link} ${styles.yt}`}>
        <AiFillYoutube />
        <span className={styles.text}>Youtube</span>
      </Link>
    </footer>
  )
}

export default Footer
