// Import React
import React from 'react';

export default function ArtCard(props) {
    return (
        <div className='card'>
            <div className='card-img-container'>
                <img className='card-img' src={props.imgSrc} alt={props.alt} />
            </div>
        </div>
    )
}