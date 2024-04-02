import React, { useState } from 'react';
import './CaptionGenerator.css';

function CaptionGenerator() {
  const [topicsInput, setTopicsInput] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');

  const generateCaption = () => {
    // Simple example: Combine topics input into a basic caption
    const caption = `A photo about ${topicsInput}. #${topicsInput.replaceAll(', ', ' #')}`;
    setGeneratedCaption(caption);
  };

  return (
    <div className="caption-generator">
      <h1>Instagram Caption Generator</h1>
      <label htmlFor="topics">Enter some topics (comma-separated):</label>
      <input type="text" id="topics" value={topicsInput} onChange={(e) => setTopicsInput(e.target.value)} />
      <button onClick={generateCaption}>Generate Caption</button>
      <div className="caption-container">
        {generatedCaption && (
          <p>{generatedCaption}</p>
        )}
      </div>
    </div>
  );
}

export default CaptionGenerator;
