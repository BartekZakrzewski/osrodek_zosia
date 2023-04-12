import styles from '../styles/Home.module.css'
import React from 'react';
import Header from '../components/header.jsx'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.landingPage}>
          <video src={"/videoBg.mp4"} autoPlay loop muted playsInline className={styles.video} />
          
        </div>
      </main>
    </div>
  )
}

export default Home