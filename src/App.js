import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import HomeComponent from './components/HomeComponent';
import ContentComponent from './components/ContentComponent';
import CopyrightComponent from './components/CopyrightComponent';
import SkillComponent from './components/SkillComponent';

function App() {
  return (
    <div className="App">
       <Navbar />
	   <HomeComponent />
	   <ContentComponent />
	   <SkillComponent />
	   <CopyrightComponent />
    </div>
  );
}

export default App;
