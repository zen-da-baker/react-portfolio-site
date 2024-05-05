// Import React
import React from 'react';

export default function Card(props) {
    return (
        <div className='card'>
            <a href={props.href} rel='noreferrer' target='_blank' className='card-link'>
                <div className='card-img-container'>
                    <img className='card-img' src={props.imgSrc} alt={props.alt} />
                </div>

                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </a>
            
        </div>
        
    )
}