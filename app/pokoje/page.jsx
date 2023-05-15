import React from 'react'
import PocketBase from 'pocketbase'
import RoomCard from '../../components/roomCard'

async function getRooms() {
    const db = new PocketBase('https://villazosia.pockethost.io')
    const data = await db.collection('rooms').getList(1, 30)
    return data?.items
}

const Rooms = async () => {
    const rooms = await getRooms()

    return (
        <div>
            {rooms?.map(room => {
                return <RoomCard key={room.id} room={room} />
            })}
        </div>
    )
}

export default Rooms
