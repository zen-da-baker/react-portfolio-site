// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import Card Component
import ArtCard from './ArtCard';

// Import Database
import data from '../database/cardData';

export default function Art() {
    return (
        <div className='app-body'>
            <h1 className='center'>Art</h1>

            <h2 className='center'>Art Projects</h2>

            <div className='gallery'>
                <ArtCard src={data.art.img1.src} alt={data.art.img1.alt} />
                <ArtCard src={data.art.img2.src} alt={data.art.img2.alt} />
                <ArtCard src={data.art.img3.src} alt={data.art.img3.alt} />

                <ArtCard src='images/paintings/painting4.jpg' alt='Jinx siting down' />
                <ArtCard src='images/paintings/painting5.jpg' alt='Woman hugging elephant' />
                <ArtCard src='images/paintings/painting6.jpg' alt='Metal pin' />

                <ArtCard src='images/paintings/painting7.jpg' alt='Heart quilt' />
                <ArtCard src='images/paintings/painting8.jpg' alt='Sunrise' />
                <ArtCard src='images/paintings/painting9.jpg' alt='Jet midflight' />

                <ArtCard src='images/paintings/painting10.jpg' alt='Gingerbread house' />
                <ArtCard src='images/paintings/painting11.jpg' alt='Bubblegum plant' />
                <ArtCard src='images/paintings/painting12.jpg' alt='Cinnamonrolls' />

                <ArtCard src='images/paintings/painting13.jpg' alt='Baguette Bread' />
                <ArtCard src='images/paintings/painting14.jpg' alt='Flowers glowing in a void' />
                <ArtCard src='images/paintings/painting15.jpg' alt='Basketball' />

                <ArtCard src='images/paintings/painting16.jpg' alt='Strawberry cake' />
                <ArtCard src='images/paintings/painting17.jpg' alt='Dog sleeping' />
                <ArtCard src='images/paintings/painting18.jpg' alt='Truck in a sunrise' />

                <ArtCard src='images/paintings/painting19.jpg' alt='Neon portrait' />
                <ArtCard src='images/paintings/painting20.jpg' alt='Blue hair woman' />
                <ArtCard src='images/paintings/painting21.jpg' alt='Viper portrait' />
                
            </div>
        </div>
    )
}