import React, { useState, useEffect } from 'react';
import './MemeGenerator.css';

function MemeGenerator() {
  const [memes, setMemes] = useState([]);
  const [selectedMeme, setSelectedMeme] = useState('');
  const [generatedMeme, setGeneratedMeme] = useState(null);

  // Fetch memes from an API
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setMemes(data.data.memes))
      .catch(error => console.error('Error fetching memes:', error));
  }, []);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to generate meme using selectedMeme, topText, and bottomText
    // This could involve calling another API to generate the meme image    
    // For demonstration, just setting the generatedMeme state with the URL
    setGeneratedMeme(selectedMeme);
  }

  return (
    <div className="meme-generator">
      <h1>Meme Generator</h1>
      <form onSubmit={handleSubmit}>
        <select value={selectedMeme} onChange={(e) => setSelectedMeme(e.target.value)}>
          <option value="">Select a meme</option>
          {memes.map(meme => (
            <option key={meme.id} value={meme.url}>{meme.name}</option>
          ))}
        </select>
        <button type="submit">Generate Meme</button>
      </form>
      {generatedMeme && (
        <div className="generated-meme">
          <img src={generatedMeme} alt="Generated Meme" style={{ width: '300px', height: '300px' }}  />
        </div>
      )}
    </div>
  );
}

export default MemeGenerator;
