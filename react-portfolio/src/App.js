// Import React
import React, { useState } from 'react';

// Import Styles
import './App.css';

// Import Components
import Header from './components/Header';
import Home from './components/Home';
import Art from './components/Art';
import Programming from './components/Programming';
import Writing from './components/Writing';
import Education from './components/Education';
import About from './components/About';

function App() {

  const [body, setBody] = useState('home');

  function handleHome() {
    setBody('home');
  }

  function handleArt() {
    setBody('art');
  }

  function handleProgramming() {
    setBody('programming');
  }

  function handleWriting() {
    setBody('writing');
  }

  function handleEducation() {
    setBody('education');
  }

  function handleAbout() {
    setBody('about');
  }

  if (body === 'home') {
    return (
      <div className='app'>
        <Header
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Home 
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
        />
      </div>
    )
  }

  if (body === 'art') {
    return (
      <div className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Art />
      </div>
    )
  }

  if (body === 'programming') {
    return (
      <div className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Programming />
      </div>
    )
  }

  if (body === 'writing') {
    return (
      <div className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Writing />
      </div>
    )
  }

  if (body === 'education') {
    return (
      <div className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Education />
      </div>
    )
  }

  if (body === 'about') {
    return (
      <div className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <About />
      </div>
    )
  }
}

export default App;
