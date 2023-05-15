import React from 'react'
import RoomCard from '../../../components/roomCard'

async function getRoom(pageSlug) {
    const res = await fetch(`https://villazosia.pockethost.io/api/collections/rooms/records?filter=(slug='${pageSlug}')`)
    const data = await res.json()
    return data.items
}

const Room = async ({ params }) => {
    const room = await getRoom(params.id)

    return (
        <div>
            <RoomCard room={room[0]} />
        </div>
    )
}

export default Room
