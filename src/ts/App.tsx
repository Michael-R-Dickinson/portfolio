
import '../scss/App.scss';
import '../scss/hero/Hero.scss';
import '../scss/projects/Projects.scss';
import '../scss/contact/Contact.scss';
import staticData from '../data.json';

import bertThumbnail from "../assets/bert_thumbnail.png";
import NmtThumbnail from "../assets/nmt_thumbnail.png";
import MlGuiThumbnail from "../assets/mlgui_thumbnail.png";
import ClassificationThumbnail from "../assets/classification_thumbnail.png";

import Hero from './hero/hero';
import Projects from './projects/projects';
import BertProject from './projects/bert-project';
import NmtProject from './projects/nmt_project';
import Contact from './contact/Contact';
import MlGuiProject from './projects/mlgui_project';
import ClassificationProject from './projects/classification_project';

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div className="App-body">
        <Hero bio={staticData.hero_bio} />
        <Projects sidebarThumbnails={[bertThumbnail, NmtThumbnail, MlGuiThumbnail, ClassificationThumbnail]}>
          <BertProject />
          <NmtProject />
          <MlGuiProject />
          <ClassificationProject />
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