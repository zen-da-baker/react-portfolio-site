// Import React
import React from 'react';

// Import Styles
import '../App.css';

export default function Header(props) {
    return (
        <header className="App-header">

            <h1 className='title'>Don's Portfolio</h1>
            
            <button onClick={props.handleArt}>Art</button>
            <button onClick={props.handleProgramming}>Programming</button>
            <button onClick={props.handleWriting}>Writing</button>
            <button onClick={props.handleEducation}>Education</button>

            <br/>

            <button onClick={props.handleAbout}>About</button>
          
      </header>
    )
}