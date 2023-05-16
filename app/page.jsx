import '../styles/globals.css'
import styles from '../styles/Home.module.css'
import React from 'react';
import Header from '../components/header.jsx'
import RoomCard from '../components/roomCard'
import { FaAnchor, FaBed, FaFire, FaEnvelope } from "react-icons/fa";
import { TbDisabled, TbDeviceTv, TbCamera, TbMoodKid } from "react-icons/tb";
import { BiMailSend, BiPhone } from "react-icons/bi";
import PocketBase from 'pocketbase'

async function getRooms() {
  const db = new PocketBase('https://villazosia.pockethost.io')
  const data = await db.collection('rooms').getList(1, 3)
  return data?.items
}

const Home = async () => {

  const bInfos = [
    {
      icon: <FaAnchor />,
      title: 'Nocleg blisko morza w rowach',
      desc: 'Pensjonat oddalony jest trzy minuty od centrum miejscowości Rowy, ale jednocześnie zapewnia ciszę i spokój zarazem będąc blisko morza. Rowy i okolicę wyróżnia piękna plaża, Słowiński Park Narodowy, zachodnie klifowe wybrzeże, które jest idealnym miejscem do nadmorskich spacerów, jezioro Gardno i rzeka Łupawa. Pensjonat oddalony jest o niecałe 1000 m od morza.'
    },
    {
      icon: <FaBed />,
      title: 'Komfortowe noclegi i pokoje',
      desc: 'Do dyspozycji naszych gości oddaliśmy pokoje: 2, 3, 4 i 5 osobowe z łazienkami z kabiną prysznicową, umywalką i wc. Dodatkowo kwatery wyposażone są w telewizor, oraz aneks kuchenny posiadający: lodówkę, czajnik elektryczny, podstawowe naczynia kuchenne i sztućce.'
    },
    {
      icon: <FaFire />,
      title: 'Strefa relaksu, plac zabaw',
      desc: 'Do dyspozycji posiadamy ogrodzony parking, plac zabaw oraz miejsce do wspólnego grillowania.'
    }
  ]

  const standards = [
    {
      icon: <TbDeviceTv />,
      title: 'Telewizja i internet',
      desc: 'Oferujemy pokoje z telewizją z podstawowymi programami. Wszystkie apartamenty, kwatery i pokoje dostają dostęp do Wi-Fi dla wygody korzystania z internetu i wypoczynku.'
    },
    {
      icon: <TbDisabled />,
      title: 'Kwatery i pokoje w przyziemiu',
      desc: 'Zapraszamy osoby niepełnosprawne. Pokoje w przyziemiu zapewniają swobodny przejazd wózkiem do pokoju, tarasu i ogrodu!'
    },
    {
      icon: <TbMoodKid />,
      title: 'Atrakcje dla rodzin z dziećmi',
      desc: 'Na dzieci czeka plac zabaw oraz mnóstwo innych atrakcji w samym centrum Rowów oraz na samej plaży. Dodatkowo zaraz przy Rowach znajduje się jezioro Gardno i rzeka Łupawa. Rowy dysponują również miejscami takimi jak Słowiński Park Narodowy czy ruchome wydmy blisko plaży.'
    },
    {
      icon: <TbCamera />,
      title: 'Monitoring całodobowy',
      desc: 'Dbamy o komfort wypoczynku, dlatego nasz system kamer działa na twoją korzyść przez całą dobę.'
    }
  ]

  const photos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

  const rooms = await getRooms()

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <section className={styles.landingPage}>
          <video src={"/videoBg.mp4"} autoPlay loop muted playsInline className={styles.video} />
          <div className={styles.landingContainer}>
            <span className={styles.name}>Villa <span className={styles.fancy}>ZOSIA</span></span>
            <div className={styles.buttons}>
              <a href='tel:+48510105465' className={`${styles.btn} ${styles.fullBtn}`}>Zadzwoń</a>
              <a target='_blank' href='https://www.nocowanie.pl/noclegi/rowy/kwatery_i_pokoje/59524/' className={`${styles.btn} ${styles.emptBtn}`}>Wirtualny Spacer</a>
            </div>
          </div>
          <div className={styles.basicInfoContainer}>
            {bInfos.map((info, index) => (
              <div className={styles.basicInfoEl} key={index}>
                <div className={styles.basicInfoIcon}>{info.icon}</div>
                <h2 className={styles.basicInfoTitle}>{info.title}</h2>
                <p className={`${styles.cutoffText} ${styles.basicInfoDesc}`}>{info.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.about} id='o-nas'>
          <h1 className={styles.aboutHeader}>
            Nocleg w Rowach | Standard noclegu
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
        <section className={styles.galery} id='galeria'>
          {
            photos.map((photo, index) => (
              <img src={`/photos/${photo}.jpg`} className={styles.galeryImg} alt={photo} key={index} />
            ))
          }
        </section>
        <section className={styles.access} id='dojazd'>
          <h1 className={styles.accessHeader}>Dojazd</h1>
          <h5 className={styles.accessAdress}>ul. Wikingów 2 - róg ulicy Bałtyckiej</h5>

          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2307.7505181685474!2d17.04886817716438!3d54.66121717553495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fe6adde9f09bd5%3A0x5f301f2f751eb2c2!2sZosia!5e0!3m2!1spl!2spl!4v1681501456925!5m2!1spl!2spl" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.accessMap} />
        </section>
        <section className={styles.roomsBox} id='pokoje'>
          <h1 className={styles.roomsTitle}>Pokoje</h1>
          <div className={styles.roomsContainer}>
            {rooms.map(room => (
              <RoomCard room={room} key={room.id}/>
            ))}
          </div>
          <a href="/pokoje" className={styles.roomsBtn}>Wszystkie pokoje</a>
        </section>
        <section className={styles.reservation}>
          <div className={styles.reservationContainer}>
            <div className={styles.reservationLeft}> 
              <div className={styles.reservationIcon}>
                <BiMailSend /> 
              </div> 
              <h2 className={styles.reservationTitle}>Złóż rezerwację!</h2>
              <a href="tel:+48510105465" className={styles.reservationPhone}> <BiPhone /> Zadzwoń</a>
            </div>
            <form className={styles.reservationRight}>
              <label className={styles.reservationLabel}>
                Imię i Nazwisko
                <input className={styles.reservationInput} type="text" name="name" id="name" required />
                <span className={styles.rodo}>
                  Administratorem Pani/Pana danych osobowych jest właściciel Pensjonatu Zosia. Posiada Pani/Pan prawo dostępu do treści swoich danych, prawo ich sprostowania, usunięcia, ograniczenia przetwarzania, prawo do przenoszenia danych lub do wniesienia sprzeciwu wobec ich przetwarzania. Ma Pani/Pan prawo wniesienia skargi do organu nadzorczego - PUODO, gdy uzna Pani/Pan, iż przetwarzanie danych osobowych narusza przepisy RODO.
                </span>
              </label>
              <label className={styles.reservationLabel}>
                Email
                <input className={styles.reservationInput} type="email" name="email" id="email" required />
                <span className={styles.rodo}>
                  Informujemy, iż Pani/Pana dane osobowe przekazane nam za pośrednictwem poczty elektronicznej są przetwarzane w celu prowadzenia korespondencji z Państwem i w celu, dla którego zostały nam udostępnione.
                </span>
              </label>
              <label className={styles.reservationLabel}>
                Treść rezerwacji
                <textarea className={styles.reservationTextarea} name="content" id="content" cols="30" rows="10"></textarea>
              </label>
              <button className={styles.reservationButton}>Wyślij</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home