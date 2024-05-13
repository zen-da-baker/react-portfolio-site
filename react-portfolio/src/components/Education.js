// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import components
import Card from './Card';

// Import database
import data from '../database/cardData';

export default function Education() {
    return (
        <div className='app-body'>
            <h1 className='center'>Education</h1>

            <h2 className='center'>eLearning Tutorials</h2>

            <div className='gallery'>
                <Card 
                    title={data.education.tutorial1.title}
                    description={data.education.tutorial1.description}
                    href={data.education.tutorial1.href}
                    src={data.education.tutorial1.src}
                    alt={data.education.tutorial1.alt}
                />

                <Card 
                    title={data.education.tutorial2.title}
                    description={data.education.tutorial2.description}
                    href={data.education.tutorial2.href}
                    src={data.education.tutorial2.src}
                    alt={data.education.tutorial2.alt}
                />

                <Card 
                    title={data.education.tutorial3.title}
                    description={data.education.tutorial3.description}
                    href={data.education.tutorial3.href}
                    src={data.education.tutorial3.src}
                    alt={data.education.tutorial3.alt}
                />

                <Card 
                    title={data.education.tutorial4.title}
                    description={data.education.tutorial4.description}
                    href={data.education.tutorial4.href}
                    src={data.education.tutorial4.src}
                    alt={data.education.tutorial4.alt}
                />
            </div>
        </div>
    )
}