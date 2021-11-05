import React from "react";
import { useSelector } from "react-redux";
import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedSidebar from "./EventDetailedSidebar";

export default function EventDetailedPage({ match }) {
  //let { id } = useParams(); -alternative to match
  let { events } = useSelector((state) => state.event);
  let eventId = match.params.id;
  let selectedEvent = events.find((e) => e.id === eventId);

  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailedHeader event={selectedEvent} />
        <EventDetailedInfo event={selectedEvent} />
        <EventDetailedChat />
      </GridColumn>

      <GridColumn width={6}>
        <EventDetailedSidebar attendees={selectedEvent.attendees} />
      </GridColumn>
    </Grid>
  );
}
