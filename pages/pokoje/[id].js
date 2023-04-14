// import React, { useEffect } from 'react'
// import { useRouter } from 'next/router'

// const Room = ({ room }) => {
//     const router = useRouter();
//     const { id } = router.query

//     return (
//         <div>
//             { id } { room.id } { room.photo } { room.title } { room.n_people } { room.desc }
//         </div>
//     )
// }

// export default Room

// export async function getStaticProps({ params }){
//     const req = await fetch(`https://villazosia.vercel.app//pokoje.json`)
//     const data = await req.json()

//     const _id = params.id
//     const d = JSON.parse(data[toString(_id)])
//     return {
//         props: { 
//             room: {
//                 id: d.id,
//                 photo: d.photo,
//                 title: d.title,
//                 n_people: d.n_people,
//                 desc: d.desc
//             }
//         }
//     }
// }

// export async function getStaticPaths() {
//     const req = await fetch('https://villazosia.vercel.app//pokoje_titles.json')
//     const data = await req.json()

//     const paths = data.map((room) => {
//         return { params: { id: toString(room) }}
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }