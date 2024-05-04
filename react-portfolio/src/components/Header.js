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
                <a className='resume-btn btn' href='/resume/resume.pdf' target='_blank'>Resume</a>

                <hr />

                <button className='btn' onClick={props.handleArt}>Art</button>
                <button className='btn' onClick={props.handleProgramming}>Programming</button>
                <button className='btn' onClick={props.handleWriting}>Writing</button>
                <button className='btn' onClick={props.handleEducation}>Education</button>

                <button className='btn' onClick={props.handleAbout}>About</button>
            </div>
            
          
      </header>
    )
}