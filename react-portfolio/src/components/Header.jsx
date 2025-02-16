// Import React
import React from 'react';

export default function Header(props) {

    function scroll() {
        window.scroll(0,0);
    }

    scroll();

    return (
        <header className="app-header">

            <h1 className='title'>Don's Portfolio</h1>
            
            <div className='button-container'>
                <button className='primary-btn btn' onClick={props.handleHome}>Home</button>
                <a className='resume-btn btn center' href='/resume/resume.pdf' rel='noreferrer' target='_blank'>Resume</a>

                <hr className="desktop" />

                <button className='btn desktop' onClick={props.handleProgramming}>Programming</button>

                <button className='btn desktop' onClick={props.handleEducation}>Education</button>

                <button className='btn desktop' onClick={props.handleArt}>Art</button>
                
                <button className='btn desktop' onClick={props.handleWriting}>Writing</button>
                

                <button className='btn' onClick={props.handleAbout}>About</button>
            </div>
            
          
      </header>
    )
}