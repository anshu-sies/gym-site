import React from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaFilter,
  FaSearch,
} from "react-icons/fa";
import "../../styles/discover.css";

export default function Discover() {
  const dummyEvents = [
    {
      id: 1,
      title: "CrossFit Challenge",
      category: "CrossFit",
      date: "Oct 25, 2023",
      time: "6:00 PM",
      location: "Elite Fitness Gym",
      participants: 30,
      image:
        "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Yoga & Meditation Retreat",
      category: "Yoga",
      date: "Nov 5, 2023",
      time: "8:00 AM",
      location: "Greenwood Park",
      participants: 20,
      image:
        "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Marathon Training",
      category: "Running",
      date: "Dec 10, 2023",
      time: "7:00 AM",
      location: "Cycling Tour",
      participants: 50,
      image:
        "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];
  return (
    <>
      <div className="searchandFilter">
        <div className="search-filter">
          <div className="search-box">
            <FaSearch className="icon" />
            <input
              type="text"
              placeholder="Search events by name, category..."
            />
          </div>
          <button className="filter-btn">
            <FaFilter className="icon" /> Filters
          </button>
        </div>
      </div>
      <section className="allEvents">
        <div>
          {dummyEvents.map((events, index) => (
            <div key={events.id} className="individual-event">
              <img
                src={events.image}
                className="event-image"
                alt={events.title}
              />
              <p className="eventCat">{events.category}</p>
              <div className="allText">
                <h3 className="title">{events.title}</h3>
                <div className="eventDetails">
                  <span>
                    <p className="txt">
                      {" "}
                      <FaCalendarAlt className="icon" />
                      {events.date}
                      <br />
                    </p>
                    <p className="txt time" >{events.time}</p>
                  </span>
                  <p className="txt">
                    {" "}
                    <FaMapMarkerAlt className="icon" /> {events.location}
                  </p>
                
                <p className="txt part">
                  <FaUsers className="icon" /> 30 participants
                </p>
                </div>
                <div className="buttons">
                  <button className="btnn details-btn">Details</button>
                  <button className=" btnn join-btn">Join Event</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
