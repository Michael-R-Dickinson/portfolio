
import '../scss/App.scss';
import '../scss/hero/Hero.scss';
import '../scss/projects/Projects.scss';
import staticData from '../data.json';

import bertThumbnail from "../assets/bert_thumbnail.png";
import Hero from './hero/hero';
import Projects from './projects/projects';
function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Hero bio={staticData.hero_bio} />
        <Projects sidebarThumbnails={[bertThumbnail, bertThumbnail, bertThumbnail, bertThumbnail]}>
          <BlankProject />
          <BlankProject />
          <BlankProject />
          <BlankProject />
        </Projects>
      </div>
    </div>);
}

export default App;


function BlankProject() {
  return <></>
}