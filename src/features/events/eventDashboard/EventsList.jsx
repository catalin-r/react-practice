import React from "react";
import EventsListItem from "./EventListItem";

export default function EventsList(props) {
  const events = props.events.map((e) => (
    <EventsListItem
      event={e}
      key={e.id}
      viewSelectedEvent={props.viewSelectedEvent}
      deleteEvent={props.deleteEvent}
    />
  ));

  return <>{events}</>;
}
