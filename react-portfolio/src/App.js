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

  return (
    <div className="App">
      

      <main className="app-body">
        <h1>Body</h1>
        {body}
      </main>
    </div>
  );
}

export default App;
