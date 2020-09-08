//https://www.youtube.com/watch?v=vdYlHgyqKqY
//https://youtu.be/vdYlHgyqKqY


import React from 'react';
import YouTube from 'react-youtube';

class Video extends React.Component {

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }


    render() {
      const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
   
      return <YouTube videoId={this.props.videoID} opts={opts} onReady={this._onReady} />;
    }
   
    
  }

  export default Video