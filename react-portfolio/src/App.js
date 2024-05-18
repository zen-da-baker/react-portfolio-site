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

import Janissaries from './components/articles/Janissaries';
import ImperialRussia from './components/articles/ImperialRussia';
import NativeAmericanResistance from './components/articles/NativeAmericanResistance';
import Review from './components/articles/Review';
import Vietnam from './components/articles/Vietnam';

function App() {

  // Body page states
  const [body, setBody] = useState('vietnam');

  // Body page handler functions using states
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

  function handleJanissaries() {
    setBody('janissaries');
  }

  function handleImperialRussia() {
    setBody('imperialRussia');
  }

  function handleNativeAmericanResistance() {
    setBody('nativeAmericanResistance');
  }

  function handleReview() {
    setBody('review');
  }

  function handleVietnam() {
    setBody('vietnam');
  }

  
  // Layout page based on states
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
        <Writing 
          handleJanissaries={handleJanissaries}
          handleImperialRussia={handleImperialRussia}
          handleNativeAmericanResistance={handleNativeAmericanResistance}
          handleReview={handleReview}
          handleVietnam={handleVietnam}
        />
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

  if (body === 'janissaries') {
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
        <Janissaries />
      </main>
    )
  }

  if (body === 'imperialRussia') {
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
        <ImperialRussia />
      </main>
    )
  }

  if (body === 'nativeAmericanResistance') {
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
        <NativeAmericanResistance />
      </main>
    )
  }

  if (body === 'review') {
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
        <Review />
      </main>
    )
  }

  if (body === 'vietnam') {
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
        <Vietnam />
      </main>
    )
  }
}

export default App;
