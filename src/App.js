import React, { Component } from 'react';
import './App.css';
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { getEvents } from './api'
import Header from './Header'
import Footer from './Footer'

class App extends Component {

  constructor() {
    super();
    this.state = {
      events: []
    }
  }

  async componentDidMount() {
    this.setState({
      events: await getEvents()
    })
  }

  render() {
    const Race = () => {
      return this.state.events.map((event) => (
        <Col lg="4" md="4" sm="12" xs="12" key={event.id}>
          <Card>
            <CardImg top width="100%" src={event.acf.image.url} alt={event.acf.title} />
            <CardBody>
              <CardTitle>{event.acf.title}</CardTitle><br />
              <CardText><div dangerouslySetInnerHTML={ {__html: event.acf.details} }></div></CardText>
              <div className="tag">
              {
                event.acf.km.map((item) => (
                    <Button className="space-on-tag" color="info" size="xs">{item.name}</Button>
                  ))
              }
              </div><br /><br />
              <a className="event-link" href={event.acf.link} target="_blank">Read more</a>
            </CardBody>
          </Card>
        </Col>
      ))
    }

    return (
      <div className="App">
        <Header logoname="raceyaya"/>
        <Container>
        <Row>
          <Race/>
        </Row>
        </Container>
        <Footer />
      </div>
    );
  }
  
}

export default App;
