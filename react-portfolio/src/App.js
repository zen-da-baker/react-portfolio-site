// Import React
import React, { useState } from 'react';

// Import Styles
import './App.css';

// Import Components
import Art from './components/Art';
import Header from './components/Header';

function App() {

  const [body, setBody] = useState('art');

  if (body === 'art') {
    return (
      <div className='App'>
        <Header />
        <Art />
      </div>
    )
  }

  if (body === 'programming') {

  }

  if (body === 'writing') {

  }

  if (body === 'education') {

  }

  if (body === 'about') {
    
  }
}

export default App;
