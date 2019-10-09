import React, { Component } from 'react';
import YouTube from 'react-youtube';

const style = {
  videoplayer: {
    position: 'relative',
    width: '100%',
    height: '300px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '100'
  }
}

class Home extends Component {
  render() {

    const opts = {
      height: '1080',
      width: '1920',
      // height: '843.75',
      // width: '1500',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        loop: 1,
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 0,
        disablekb: 1,
        modestbranding: 0,
        start: 4,
        iv_load_policy: 3
      },
    };

    return (
      <div style={style.videoplayer}>
        <YouTube
          videoId="AJUmaS3Rb14"
          opts={opts}
        />
      </div>
    );
  }
}

export default Home;
