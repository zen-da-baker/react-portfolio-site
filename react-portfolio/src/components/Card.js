// Import React
import React from 'react';

export default function Card(props) {
    return (
        <div className='card-frame'>
            <a href={props.href} rel='noreferrer' target='_blank' className='card-link'>
                <div className='card'>

                </div>

                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </a>
            
        </div>
        
    )
}