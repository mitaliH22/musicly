import React from 'react'
import './MusicPlayer.css';

function MusicPlayer() {
  return (
    <div className="music-player">
      <div className="song-details">
        <p>Song name</p>
        <small>Artist name</small>
      </div>
      <div className="btn-group">
        <button>Shuffle</button>
        <button> Prev </button>
        <button> Play </button>
        <button> Next </button>
        <button>Loop</button>
      </div>
      <div className="btn-group">
        <button>Volume</button>
        <button>Lyrics</button>
      </div>
    </div>
  );
}

export default MusicPlayer