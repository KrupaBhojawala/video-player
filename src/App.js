import React from 'react';
import './App.css';
import "../node_modules/video-react/dist/video-react.css"
import '../node_modules/video-react/styles/scss/video-react.scss'
// import "~video-react/styles/scss/video-react";
import { Player } from 'video-react';

const App = () => {
  return (
  <div className="App">
    <div className="col-md-6" align="center" >
    <Player
      src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" 
    />
    </div>
  </div>
  // "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
  );
};

export default App;