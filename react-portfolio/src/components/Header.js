// Import React
import React from 'react';

// Import Styles
import '../App.css';

export default function Header(props) {
    return (
        <header className="app-header">

            <h1 className='title'>Don's Portfolio</h1>
            
            <div className='button-container'>
                <button className='primary-btn btn' onClick={props.handleHome}>Home</button>
                <button className='btn' onClick={props.handleArt}>Art</button>
                <button className='btn' onClick={props.handleProgramming}>Programming</button>
                <button className='btn' onClick={props.handleWriting}>Writing</button>
                <button className='btn' onClick={props.handleEducation}>Education</button>

                <br />

                <a href='/resume/resume.pdf' target='_blank' className='btn'>Resume</a>

                <br />

                <button className='btn' onClick={props.handleAbout}>About</button>
            </div>
            
          
      </header>
    )
}