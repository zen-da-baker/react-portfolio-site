// Import React
import React, { useState } from 'react';

// Import Styles
import './App.css';
import './history.css';

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

  function

  

  if (body === 'home') {
    return (
      <main className='app'>
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
      </main>
    )
  }

  if (body === 'art') {
    return (
      <main className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Art />
      </main>
    )
  }

  if (body === 'programming') {
    return (
      <main className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Programming />
      </main>
    )
  }

  if (body === 'writing') {
    return (
      <main className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Writing />
      </main>
    )
  }

  if (body === 'education') {
    return (
      <main className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <Education />
      </main>
    )
  }

  if (body === 'about') {
    return (
      <main className='app'>
        <Header 
          handleHome={handleHome}
          handleArt={handleArt}
          handleProgramming={handleProgramming}
          handleWriting={handleWriting}
          handleEducation={handleEducation}
          handleAbout={handleAbout}
        />
        <About />
      </main>
    )
  }
}

export default App;
