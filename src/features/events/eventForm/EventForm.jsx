import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";

export default function EventForm({
  setCreateEventFormOpen,
  addEvent,
  event,
  updateEvent,
}) {
  const initialEvent = event ?? {
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

  function onSubmit(e) {
    if (event) {
      updateEvent(currentEvent);
    } else {
      console.log("New Event will be added: " + JSON.stringify(currentEvent));
      addEvent(currentEvent);
      setCreateEventFormOpen(false);
    }
  }

  return (
    <Segment clearing>
      <Header content={!event ? "Create new event" : "Edit event"} />
      <Form onSubmit={onSubmit}>
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
