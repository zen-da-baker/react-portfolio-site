// Import React
import React from 'react';

export default function Card(props) {
    return (
        <div className='card-frame'>
            <div className='card'>
            
            </div>

            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
        
    )
}