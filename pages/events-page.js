// imports
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

// import components
import NavBar from '../components/NavBar/NavBar'
import EventCard from '../components/EventCard/EventCard'

// import env
import { serverUrl } from '../environment'

function EventsPage() {
    const [events, setEvents] = useState([])

    useEffect(() => {
        async function getEvents() {
            const response = await fetch(`${serverUrl}/events`)
            const data = await response.json()
            setEvents(data.payload)
        }

        getEvents()
    }, [])

const BACKEND_URL = process.env.BACKEND_URL

const EventsPage = ({ events }) => {
    console.log(events)
    return (
        <div>
            <Head>
                <title>FrontEnd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <h1>A list of all events</h1>

            {events ? (
                <ul>
                    {events.map((event) => (
                        <li key={event.id}>
                            <Link href="/event/[id]" as={`/event/${event.id}`}>
                                <a>
                                    <EventCard event={event} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>Loading events...</div>
            )}
        </div>
    )
}

export async function getServerSideProps() {
    const res = await fetch(`${BACKEND_URL}/events`)
    const data = await res.json()
    const listOfEvents = data.payload
    console.log(listOfEvents)

    return {
        props: {
            events: listOfEvents
        }
    }
}
export default EventsPage
