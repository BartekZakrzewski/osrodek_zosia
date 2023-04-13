import styles from '../styles/Home.module.css'
import React from 'react';
import Header from '../components/header.jsx'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.landingPage}>
          <video src={"/videoBg.mp4"} autoPlay loop muted playsInline className={styles.video} />
          <div className={styles.landingContainer}>
            <h1 className={styles.name}>Villa <span className={styles.fancy}>ZOSIA</span></h1>
            <div className={styles.buttons}>
              <a href='#kontakt' className={`${styles.btn} ${styles.fullBtn}`}>Kontakt</a>
              <a target='_blank' href='https://www.nocowanie.pl/noclegi/rowy/kwatery_i_pokoje/59524/' className={`${styles.btn} ${styles.emptBtn}`}>Wirtualny Spacer</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home