import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import SideBar from './SideBar.js';
import VideoCardList from './VideoCardList.js';

// add fontawesome icons used in the codebase
library.add(faTags);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col className="sidebar-col" md="2">
              <SideBar />
            </Col>
            <Col className="content-col" md={{ size: 4, offset: 3 }}>
              <VideoCardList />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
