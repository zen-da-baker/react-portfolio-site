// Import React
import React from 'react';

export default function ArticleCard(props) {
    return (
        <div className='card'>
            <div className='card-img-container'>
                <img className='card-img' src={props.src} alt={props.alt} />
            </div>

            <h3 className='paragraph'>{props.title}</h3>
            <p className='paragraph'>{props.description}</p>

            <button className='btn' onClick={props.handler}>View Article</button>
        </div>
    )
}