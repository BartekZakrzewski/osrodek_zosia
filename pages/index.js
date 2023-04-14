import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import Header from '../components/header.jsx'
import { FaAnchor, FaBed, FaFire } from "react-icons/fa";

const Home = () => {
  const [checked, setChecked] = useState(false);

  const bInfos = [
    {
      icon: <FaAnchor />,
      title: 'BLISKO DO MORZA',
      desc: 'Pensjonat oddalony jest trzy minuty od centrum Rowów, ale jednocześnie zapewnia ciszę i spokój. Okolicę wyróżnia piękna plaża, Park Słowiński oraz zachodnie klifowe wybrzeże, które jest idealnym miejscem do spacerów.'
    },
    {
      icon: <FaBed />,
      title: 'KOMFORTOWE WARUNKI',
      desc: 'Do dyspozycji naszych gości oddaliśmy pokoje: 2, 3, 4 i 5 osobowe. W każdym pokoju znajduje się łazienka z kabiną prysznicową, umywalką i wc. Dodatkowo każdy pokój wyposażony jest w telewizor, lodówkę, czajnik elektryczny, podstawowe naczynia kuchenne i sztućce.'
    },
    {
      icon: <FaFire />,
      title: 'STREFA RELAKSU Z GRILLEM',
      desc: 'Do dyspozycji posiadamy ogrodzony parking, plac zabaw oraz miejsce do wspólnego grillowania.'
    },
  ]

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
          <div className={styles.basicInfoContainer}>
            {bInfos.map((info, index) => (
              <div className={styles.basicInfoEl} key={index}>
                <div className={styles.basicInfoIcon}>{info.icon}</div>
                <div className={styles.basicInfoTitle}>{info.title}</div>
                <div className={`${styles.cutoffText} ${checked && styles.checked} ${styles.basicInfoDesc}`}>{info.desc}</div>
                {/* <button className={styles.expandBtn} onClick={() => setChecked(!checked)}>{ checked && "Pokaż mniej" || !checked && "Pokaż więcej" }</button> */}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home