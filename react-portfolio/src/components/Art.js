// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import Card Component
import ArtCard from './ArtCard';

export default function Art() {
    return (
        <div className='app-body'>
            <h1 className='center'>Art</h1>

            <h2 className='center'>Art Projects</h2>

            <div className='gallery'>
                <ArtCard imgSrc='images/artrfooter.png' alt='test text' />
                <ArtCard imgSrc='images/artrfooter.png' alt='test text' />
                <ArtCard imgSrc='images/artrfooter.png' alt='test text' />
                <ArtCard imgSrc='images/artrfooter.png' alt='test text' />
                <ArtCard imgSrc='images/artrfooter.png' alt='test text' />

                
            </div>
        </div>
    )
}