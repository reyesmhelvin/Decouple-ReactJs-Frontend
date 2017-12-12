import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Container, Row, Col, Jumbotron, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import { getEvents } from './api'

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <img src={logo} />
        <h1 className="display-3">Register Now!</h1>
        <p className="lead">Crunch more kilometers with RaceYaya.</p>
        <hr className="my-2" />
        <p>This is a Decoupled Architecture with Wordpress</p>
      </Jumbotron>
    </div>
  );
};

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
        <Col lg="4" md="4" sm="12" xs="12">
          <Card key={event.id}>
              <CardImg top width="100%" src={event.acf.image.url} alt="Card image cap" />
              <CardBody>
                <CardTitle>{event.acf.title}</CardTitle>
                <br />
                <CardText><div dangerouslySetInnerHTML={ {__html: event.acf.details} }></div></CardText>
                {
                  event.acf.km.map((item) => (
                      <Button className="space-on-tag" color="info" size="xs">{item.name}</Button>
                    ))
                }
                <br />
                <br />
                <a href={event.acf.link} target="_blank">Read more</a>
              </CardBody>
            </Card>
          </Col>
          ))
    }
    return (
      <div className="App">
        <Header/>
        <Container>
        <Row>
          
          <Race/>
        </Row>
        </Container>
      </div>
    );
  }
}

export default App;
