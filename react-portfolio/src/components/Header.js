// Import React
import React from 'react';

// Import Styles
import '../App.css';

export default function Header(props) {
    return (
        <header className="app-header">

            <h1 className='title'>Don's Portfolio</h1>
            
            <div className='button-container'>
                <button className='primary-btn' onClick={props.handleHome}>Home</button>
                <button onClick={props.handleArt}>Art</button>
                <button onClick={props.handleProgramming}>Programming</button>
                <button onClick={props.handleWriting}>Writing</button>
                <button onClick={props.handleEducation}>Education</button>

                <br/>

                <button onClick={props.handleAbout}>About</button>
            </div>
            
          
      </header>
    )
}