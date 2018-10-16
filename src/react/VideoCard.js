import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './VideoCard.css';

class VideoCard extends Component {
  render() {
    return (
        <div className="VideoCard">
          <Card>
            <CardBody className="CardBody">
              <CardTitle>{this.props.title}</CardTitle>
              <div>
                <iframe
                  width="100%"
                  height="300px"
                  src={this.props.video_src}
                  frameborder="0"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                ></iframe>
              </div>
              <CardText className="videocard-tags">
                <FontAwesomeIcon icon="tags" />
                {'  ' + this.props.tags.join('  ')}
              </CardText>
            </CardBody>
          </Card>
        </div>
    );
  }
}

export default VideoCard;
