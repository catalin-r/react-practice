import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import EventsList from "./EventsList";
import { sampleData } from "../../../app/api/sampleData";

const EventDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  /*function computeNextEventId(events) {
    const nextIdAsString = events
      .map((e) => e.id)
      .reduce((i, j) => (i > j ? i : j));

    return parseInt(nextIdAsString) + 1;
  }

  function addEvent(event) {
    const nextId = computeNextEventId(events);
    const newEventList = [...events, { ...event, ...{ id: nextId } }];

    setEvents(newEventList);
  }

  function updateEvent(updatedEvent) {
    const updatedEventsList = events.map((e) =>
      e.id === updatedEvent.id ? updatedEvent : e
    );
    setEvents(updatedEventsList);
  }*/

  function deleteEvent(eventId) {
    const updatedEventsList = events.filter((e) => e.id !== eventId);
    setEvents(updatedEventsList);
  }

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventsList
          events={events}
          deleteEvent={deleteEvent}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <h2>Event Filters</h2>
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
