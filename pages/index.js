import styles from '../styles/Home.module.css'
import React, {useState} from 'react';
import Header from '../components/header.jsx'
import { FaAnchor, FaBed, FaFire } from "react-icons/fa";
import { TbDisabled, TbDeviceTv, TbCamera, TbMoodKid } from "react-icons/tb";

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
    }
  ]

  const standards = [
    {
      icon: <TbDeviceTv />,
      title: 'TELEWiZJA I INTERNET',
      desc: 'Telewizja z podstawowymi programami znajduje w każdym pokoju. Po przyjeździe otrzymasz hasło do sieci WiFi, dla Twojej swobody korzystania z internetu.'
    },
    {
      icon: <TbDisabled />,
      title: 'POKOJE W PRZYZIEMIU',
      desc: 'Zapraszamy osoby niepełnosprawne. Pokoje w przyziemiu zapewniają swobodny przejazd wózkiem.'
    },
    {
      icon: <TbMoodKid />,
      title: 'ATRAKCJE DLA DZIECI',
      desc: 'Dzieci odnajdą się świetnie w naszym ogrodzie, a w okolicy pociechy czeka pełnia atracji.'
    },
    {
      icon: <TbCamera />,
      title: 'MONITORING CAŁODOBOWY',
      desc: 'Nic nie umknie naszej uwadze. Nasz system kamer działa na Twoją korzyść przez całą dobę. U nas możesz czuć się bezpiecznie.'
    }
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
        <section className={styles.about} id='o-nas'>
          <h1 className={styles.aboutHeader}>
            Standard w naszych pokojach
          </h1>
          <div className={styles.aboutGrid}>
            {standards.map((standard, index) => (
              <div className={styles.standardCard} key={index}>
                <div className={styles.standardIcon}>{standard.icon}</div>
                <div className={styles.standardCont}>
                  <h3 className={styles.standardTitle}>{standard.title}</h3>
                  <div className={styles.standardDesc}>{standard.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.access} id='dojazd'>
          <h1 className={styles.accessHeader}>Dojazd</h1>
          <h5 className={styles.accessAdress}>ul. Wikingów 2 - róg ulicy Bałtyckiej</h5>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.7505181685474!2d17.04886817716438!3d54.66121717553495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe6adde9f09bd5%3A0x5f301f2f751eb2c2!2sZosia!5e0!3m2!1spl!2spl!4v1681501456925!5m2!1spl!2spl" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.accessMap} />
        </section>
        <section>
          
        </section>
      </main>
    </div>
  )
}

export default Home