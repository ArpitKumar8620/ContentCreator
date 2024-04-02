import React, { useState, useEffect } from 'react';
import './JokeGenerator.css';

function JokeGenerator() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} ${data.punchline}`);
    } catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  const handleNewJokeClick = () => {
    fetchJoke();
  };

  return (
    <div className="App">
      <h1>Random Joke Generator</h1>
      <div className="joke-container">
        <p>{joke}</p>
      </div>
      <button onClick={handleNewJokeClick}>Get New Joke</button>
    </div>
  );
}

export default JokeGenerator;
