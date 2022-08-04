
import '../scss/App.scss';
import '../scss/hero/Hero.scss';
import '../scss/projects/Projects.scss';
import '../scss/contact/Contact.scss';
import staticData from '../data.json';

import bertThumbnail from "../assets/bert_thumbnail.png";
import NmtThumbnail from "../assets/nmt_thumbnail.png";
import Hero from './hero/hero';
import Projects from './projects/projects';
import BertProject from './projects/bert-project';
import NmtProject from './projects/nmt_project';
import Contact from './contact/Contact';
function App() {

  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Hero bio={staticData.hero_bio} />
        <Projects sidebarThumbnails={[bertThumbnail, NmtThumbnail, bertThumbnail, bertThumbnail]}>
          <BertProject />
          <NmtProject />
          <BlankProject />
          <BlankProject />
        </Projects>
        <Contact {...staticData.contact_info} />
      </div>
    </div>
  );
}

export default App;


function BlankProject() {
  return <></>
}