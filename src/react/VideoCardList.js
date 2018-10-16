import React, { Component } from 'react';
import './VideoCardList.css';
import VideoCard from './VideoCard.js';

class VideoCardList extends Component {
  state = {
    videos: [
      {
        title: "Ajahn Brahm: Now This Is Podracing!",
        tags: ['unwatched', 'favorite'],
        video_src: "https://www.youtube.com/embed/X2zqiX6yL3I",
      },
      {
        title: "Open the Door of Your Heart",
        tags: ['unwatched'],
        video_src: "https://www.youtube.com/embed/GyH604b4YsI",
      },
      {
        title: "The Best Fart I Ever Did",
        tags: ['favorite'],
        video_src: "https://www.youtube.com/embed/lWjKdyWsDMI",
      },
      {
        title: "Wisdom Dog",
        tags: [],
        video_src: "https://www.youtube.com/embed/D-UmfqFjpl0",
      },
    ],
  }

  render() {
    let cards = this.state.videos.map(v => {
      return (
        <VideoCard
          title={v.title}
          tags={v.tags}
          video_src={v.video_src}
        />
      );
    });
    return (
        <div className="VideoCardList">
          {cards}
        </div>
    );
  }
}

export default VideoCardList;
