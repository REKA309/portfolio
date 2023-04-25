import './App.css';
import './styles.css';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom';
import About from './components/about';

import Skills from './components/skills';
import Project from './components/projects';
import Contact from './components/contact';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <Router>
      <nav>
      <div className="menu-container">
        <div className='reka'>
          <h1>Reka.N</h1>
        </div>
      <div className="menu">
                <ul className="menul">
                    <li><Link  to={"/about"}>About</Link></li>
                    <li><Link to={"/skills"}>Skills</Link></li>
                    <li><Link  to={"/projects"}>Projects</Link></li>
                    <li><Link  to={"/contact"}>Contact Me</Link></li>
                </ul>
       </div>
       </div>
      </nav>   
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/skills" element={<Skills/>} />
      <Route exact path="/projects" element={<Project/>} />
      <Route exact path="/contact" element={<Contact/>} />
      </Routes>
      </Router>
      
        
    </div>
  );
}

export default App;
