import { Fragment, useState } from "react";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/NavBar";

function App() {
  const [isCreateEventFormOpen, setCreateEventFormOpen] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState(null);

  function handleSelectEvent(event) {
    setSelectedEvent(event);
    console.log("Selected event: ");
    console.log(event);
    setCreateEventFormOpen(true);
  }

  function handleCreateFormOpen() {
    console.log(
      "handleCreateFormOpen called. This should reset the selected event, and make the form visible"
    );
    setSelectedEvent(null);
    setCreateEventFormOpen(true);
  }

  return (
    <Fragment>
      <NavBar handleCreateFormOpen={handleCreateFormOpen} />
      <Container className='main'>
        <EventDashboard
          isCreateEventFormOpen={isCreateEventFormOpen}
          setCreateEventFormOpen={setCreateEventFormOpen}
          handleSelectEvent={handleSelectEvent}
          selectedEvent={selectedEvent}
        />
      </Container>
    </Fragment>
  );
}

export default App;
