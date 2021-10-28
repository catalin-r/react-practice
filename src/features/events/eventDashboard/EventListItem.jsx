import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, List, Segment } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

//destructure props param
export default function EventsListItem({
  event,
  viewSelectedEvent,
  deleteEvent,
}) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size='tiny' circular src={event.hostPhotoURL} />
            <Item.Content>
              <Item.Header content={event.title} />
              <Item.Description>Hosted by {event.hostedBy}</Item.Description>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>

      <Segment>
        <span>
          <Icon name='clock' /> {event.date}
          <Icon name='marker' /> {event.venue}
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          {event.attendees.map((a) => (
            <EventListAttendee attendee={a} key={a.id} />
          ))}
        </List>
      </Segment>

      <Segment clearing>
        <div>{event.description}</div>
        <Button
          color='teal'
          floated='right'
          as={Link}
          to={`/events/${event.id}`}
        >
          View
        </Button>
        <Button
          color='red'
          floated='right'
          onClick={() => deleteEvent(event.id)}
        >
          Delete
        </Button>
      </Segment>
    </Segment.Group>
  );
}
