// Import React
import React from 'react';

export default function Header(props) {
    return (
        <header className="App-header">
            
            <button onClick={props.handleArt}>Art</button>
            <button onClick={props.handleProgramming}>Programming</button>
            <button onClick={props.handleWriting}>Writing</button>
            <button onClick={props.handleEducation}>Education</button>

            <br/>

            <button onClick={props.handleAbout}>About</button>
          
      </header>
    )
}