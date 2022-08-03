import React from 'react';

import '../scss/hero/Hero.scss'
import '../scss/projects/Projects.scss'
import '../scss/App.scss'

import staticData from '../data.json'

import Hero from './hero/hero';
import Projects from './projects/projects';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Hero bio={staticData.hero_bio} />
        <Projects> </Projects>
      </div>
    </div>);
}

export default App;
