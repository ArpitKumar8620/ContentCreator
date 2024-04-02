import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="card-container">
      <div className="card">
      <Link to="/MemeGenerator">Memer </Link>
        <p>This is Meme Generator App created with react JS .</p>
      </div>
      <div className="card">
      <Link to="/CaptionGenerator">Captioner</Link>
        <p>This is Caption Generator App for Social media.</p>
      </div>
      <div className="card">
      <Link to="/TodoListApp">Tasker</Link>
        <p>This is a Task manager App to manage all task for the day.</p>
      </div>
      <div className="card">
      <Link to="/JokeGenerator">Laughter</Link>
        <p>This is the Joke section of the application.</p>
      </div>
      <div className="card">
      <Link to="/TicTacToe">Gamer</Link>
        <p>This is a Gaming app for free time.</p>
      </div>
    </div>
  );
}

export default Home;
