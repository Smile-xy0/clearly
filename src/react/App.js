import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Jumbotron className="vertical-center">
          <Container>
            <Row>
              <Col xs="auto">
                <h1>Clearly is a guided meditation manager, coming soon.</h1>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
