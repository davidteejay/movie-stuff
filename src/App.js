import React, { useState } from 'react';
import './App.css';
import Latest from './components/Latest'
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';

const App = () => {
  const [selectedTab, selectTab] = useState('latest')

  return (
    <div className="App">
      <nav>
        <div onClick={() => selectTab('latest')}>Latest</div>
        <div onClick={() => selectTab('now-playing')}>Now Playing</div>
        <div onClick={() => selectTab('popular')}>Popular</div>
        <div onClick={() => selectTab('top-rated')}>Top Rated</div>
        <div onClick={() => selectTab('upcoming')}>Upcoming</div>
      </nav>
      <div className="content">
        {selectedTab === 'latest' && <Latest />}
        {selectedTab === 'popular' && <Popular />}
        {selectedTab === 'now-playing' && <NowPlaying />}
      </div>
    </div>
  );
}

export default App;
