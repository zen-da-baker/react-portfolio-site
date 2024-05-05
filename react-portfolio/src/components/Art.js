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
                <ArtCard imgSrc='images/paintings/painting1.jpg' alt='Blue tile church' />
                <ArtCard imgSrc='images/paintings/painting2.jpg' alt='Bread bowl' />
                <ArtCard imgSrc='images/paintings/painting3.jpg' alt='Red hat woman' />

                <ArtCard imgSrc='images/paintings/painting4.jpg' alt='Jinx siting down' />
                <ArtCard imgSrc='images/paintings/painting5.jpg' alt='Woman hugging elephant' />
                <ArtCard imgSrc='images/paintings/painting6.jpg' alt='Metal pin' />

                <ArtCard imgSrc='images/paintings/painting7.jpg' alt='Heart quilt' />
                <ArtCard imgSrc='images/paintings/painting8.jpg' alt='Sunrise' />
                <ArtCard imgSrc='images/paintings/painting9.jpg' alt='Jet midflight' />

                <ArtCard imgSrc='images/paintings/painting10.jpg' alt='Gingerbread house' />
                <ArtCard imgSrc='images/paintings/painting11.jpg' alt='Bubblegum plant' />
                <ArtCard imgSrc='images/paintings/painting12.jpg' alt='Cinnamonrolls' />

                <ArtCard imgSrc='images/paintings/painting13.jpg' alt='Baguette Bread' />
                <ArtCard imgSrc='images/paintings/painting14.jpg' alt='Flowers glowing in a void' />
                <ArtCard imgSrc='images/paintings/painting15.jpg' alt='Basketball' />

                <ArtCard imgSrc='images/paintings/painting16.jpg' alt='Strawberry cake' />
                <ArtCard imgSrc='images/paintings/painting17.jpg' alt='Dog sleeping' />
                <ArtCard imgSrc='images/paintings/painting18.jpg' alt='Truck in a sunrise' />

                <ArtCard imgSrc='images/paintings/painting19.jpg' alt='Neon portrait' />
                <ArtCard imgSrc='images/paintings/painting20.jpg' alt='Blue hair woman' />
                <ArtCard imgSrc='images/paintings/painting21.jpg' alt='Viper portrait' />
                
            </div>
        </div>
    )
}