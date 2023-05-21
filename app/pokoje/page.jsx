import React from 'react'
import PocketBase from 'pocketbase'
import RoomCard from '../../components/roomCard'
import Header from '../../components/header'
import Footer from '../../components/footer'
import '../../styles/globals.css'
import styles from '../../styles/Pokoje.module.css'

async function getRooms() {
    const db = new PocketBase('https://villazosia.pockethost.io')
    const data = await db.collection('rooms').getList(1, 30)
    return data?.items
}

const Rooms = async () => {
    const rooms = await getRooms()

    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                {rooms?.map(room => {
                return <RoomCard key={room.id} room={room} />
                })}
            </main>
            
            <Footer />
        </div>
    )
}

export default Rooms
