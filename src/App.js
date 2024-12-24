import logo from './logo.svg';
import './App.css';
import {React} from "react"
import Navbar from './components/NavBar';
import HomeComponent from './components/HomeComponent';
import ContentComponent from './components/ContentComponent';
import CopyrightComponent from './components/CopyrightComponent';
import SkillComponent from './components/SkillComponent';
import EducationComponent from './components/EducationComponent';

function App() {
  return (
    <div className="App">
       <Navbar />
	   <HomeComponent />
	   <ContentComponent />
	   <SkillComponent />
	   <EducationComponent />
	   <CopyrightComponent />
    </div>
  );
}

export default App;
