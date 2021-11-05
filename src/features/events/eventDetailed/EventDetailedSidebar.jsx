import React from "react";
import { Segment, Item } from "semantic-ui-react";

export default function EventDetailedSidebar({ attendees }) {
  let attendeesElements = attendees.map((attendee) => (
    <Item style={{ position: "relative" }} key={attendee.id}>
      <Item.Image size='tiny' src={attendee.photoURL || "/assets/user.png"} />
      <Item.Content verticalAlign='middle'>
        <Item.Header as='h3'>
          <span>{attendee.displayName}</span>
        </Item.Header>
      </Item.Content>
    </Item>
  ));

  return (
    <>
      <Segment
        textAlign='center'
        style={{ border: "none" }}
        attached='top'
        secondary
        inverted
        color='teal'
      >
        {attendees.length} People Going
      </Segment>
      {attendeesElements && (
        <Segment attached>
          <Item.Group relaxed divided>
            {attendeesElements}
          </Item.Group>
        </Segment>
      )}
    </>
  );
}
