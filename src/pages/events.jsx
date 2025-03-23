import React from "react";
import { useState } from "react";
import "../styles/events.css";
import EventsHead from "../components/events/eventsHead";
import Discover from "../components/events/discover";
import Host from "../components/events/host";

export default function Events() {
    const [events, setEvents] = useState("discover");
    

    return (
        <div className="events">
            <EventsHead />
            <p className="eventsDescription">
            Discover, join, and track fitness events in your community. Participate in challenges, competitions, and group activities
            </p>
            <div className="threeBut">
                <button className="btn" onClick={() => setEvents("discover")}>Discover Events</button>
                <button className="btn" onClick={() =>setEvents("my")}>My Events</button>   
                <button className="btn" onClick={() =>setEvents("host")}>Host Events</button>
            </div>
            <section className="eventsBody">
                {events === "discover" ? <Discover /> : events === "my" ?  <p>my </p> :  <Host/>}
            </section>
        </div>
    );
}