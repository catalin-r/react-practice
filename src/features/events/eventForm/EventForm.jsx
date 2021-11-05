import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";

export default function EventForm({ match, history }) {
  let { events } = useSelector((state) => state.event);
  let eventId = match.params.id;
  let selectedEvent = events.find((e) => e.id === eventId);
  const dispatch = useDispatch();

  const initialEvent = selectedEvent ?? {
    id: cuid(),
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
    attendees: [],
    hostPhotoURL: "/assets/user.png",
    hostedBy: "Unk",
  };

  const [currentEvent, setNewEvent] = useState(initialEvent);

  function onChange(e) {
    const { name, value } = e.target;
    setNewEvent({ ...currentEvent, ...{ [name]: value } });
  }

  function onSubmit(selectedEvent) {
    if (selectedEvent) {
      dispatch(updateEvent(currentEvent));
    } else {
      dispatch(createEvent(currentEvent));
    }
    history.push("/events");
  }

  return (
    <Segment clearing>
      <Header content={!selectedEvent ? "Create new event" : "Edit event"} />
      <Form onSubmit={() => onSubmit(selectedEvent)}>
        <Form.Field>
          <input
            type='text'
            placeholder='Event title'
            value={currentEvent.title}
            name='title'
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            type='text'
            placeholder='Category'
            name='category'
            value={currentEvent.category}
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            type='text'
            placeholder='Description'
            name='description'
            value={currentEvent.description}
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            type='text'
            placeholder='City'
            name='city'
            value={currentEvent.city}
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            type='text'
            placeholder='Venue'
            name='venue'
            value={currentEvent.venue}
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Form.Field>
          <input
            type='date'
            placeholder='Date'
            name='date'
            value={currentEvent.date}
            onChange={(e) => onChange(e)}
          />
        </Form.Field>

        <Button type='submit' floated='right' positive content='Submit' />
        <Button
          type='submit'
          floated='right'
          positive
          content='Cancel'
          as={Link}
          to='/events'
        />
      </Form>
    </Segment>
  );
}
