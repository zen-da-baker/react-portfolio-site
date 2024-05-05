// Import React
import React from 'react';

export default function Home(props) {
    return (
        <div className='app-body'>
           <h1 className='center'>Home</h1>

            <div className='gallery'>
                <div className='banner' onClick={props.handleArt}>
                    <h2>Art</h2>
                </div> 

                <div className='banner' onClick={props.handleProgramming}>
                    <h2>Programming</h2>
                </div> 

                <div className='banner' onClick={props.handleWriting}>
                    <h2>Writing</h2>
                </div> 

                <div className='banner' onClick={props.handleEducation}>
                    <h2>Education</h2>
                </div> 
            </div>
            
        </div>  
    )
}