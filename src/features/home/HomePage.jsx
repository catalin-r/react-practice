import React from "react";
import { Container, Header, Segment, Image, Button, Icon } from "semantic-ui-react";

export default function HomePage({history}) {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image src='/assets/logo.png' style={{marginBottom: 12}}></Image>
          Re-vents
        </Header>
        <Button onClick={() => history.push('/events')} size='huge' inverted>
            Get started
            <Icon name = 'right arrow'/>
        </Button>
      </Container>
    </Segment>
  );
}
