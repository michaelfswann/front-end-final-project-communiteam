//import { db } from '../../../db'
//import NavBar from '../../../components/NavBar/NavBar'
//import Footer from '../../../components/Footer/Footer'

import { serverUrl } from '../../environment'

export default function SpecificEventPage({ event }) {
    return (
        <div>
            {/* Specific event page layout here

     title,
    date,
    speaker,
    banner,
    description,
    location */}
            {event[0].title}
        </div>
    )
}

export async function getServerSideProps(context) {
    const { id } = context.query
    const res = await fetch(`${serverUrl}/events/${id}`)
    const data = await res.json()
    console.log(data)
    const event = data.payload
    return { props: { event } }
}
