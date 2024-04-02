import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Home from './components/Home';
import MemeGenerator from './components/MemeGenerator';
import CaptionGenerator from './components/CaptionGenerator';
import ToDoListApp from './components/ToDoListApp';
import './App.css';
import JokeGenerator from './components/JokeGenerator';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    /* <nav>
          <ul>
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/MemeGenerator">Option 1</NavLink></li>
            <li><NavLink to="/CaptionGenerator">Option 2</NavLink></li>
            <li><NavLink to="/option3">Option 3</NavLink></li>
          </ul>
        </nav> */
    <Router>
      <div className="app-background"> 
        <div className="header">
          <h1>Content Creator</h1>
          <div className="social-icons">
            <a href="mailto:arpitkumar8620@gmail.com" className="contact-btn">Contact</a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          </div>

          <div className="character">🚀</div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MemeGenerator" element={<MemeGenerator />} />
            <Route path="/CaptionGenerator" element={<CaptionGenerator />} />
            <Route path="/ToDoListApp" element={<ToDoListApp />} />
            <Route path="/JokeGenerator" element={<JokeGenerator />} />
            <Route path="/TicTacToe" element={<TicTacToe />} />

          </Routes>
        </div>
        <div className="footer">
          <h4>Feel free to connect with me at <a href="mailto:arpitkumar8620@gmail.com" className="contact-btn">Contact</a></h4>
        </div>
      </div>
    </Router>

  );
}

export default App;
