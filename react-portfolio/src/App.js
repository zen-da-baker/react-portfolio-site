// Import React
import React, { useState } from 'react';

// Import Styles
import './App.css';

// Import Components
import Header from './components/Header';
import Art from './components/Art';
import Programming from './components/Programming';
import Writing from './components/Writing';
import Education from './components/Education';
import About from './components/About';

function App() {

  const [body, setBody] = useState('art');

  function handleArt() {
    setBody('art')
  }

  function handleProgramming() {
    setBody('programming')
  }

  function handleWriting() {
    setBody('writing')
  }

  function handleEducation() {
    setBody('education')
  }

  function handleAbout() {
    setBody('about')
  }

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
