import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import HomeComponent from './components/HomeComponent';
import ContentComponent from './components/ContentComponent';

function App() {
  return (
    <div className="App">
       <Navbar />
	   <HomeComponent />
	   <ContentComponent />
    </div>
  );
}

export default App;
