// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import Card component
import Card from './Card';

// Import database
import data from '../database/cardData';

export default function Writing() {
    return (
        <div className='app-body'>
            <h1 className='center'>Writing</h1>

            <h2 className='center'>Short Stories</h2>

            <div className='gallery'>
                <Card 
                    title={data.writing.article1.title}
                    description={data.writing.article1.description}
                    href={data.writing.article1.href}
                />

                <Card
                    title={data.writing.article2.title}
                    description={data.writing.article2.description}
                    href={data.writing.article2.href}
                    src={data.writing.article2.src}
                    alt={data.writing.article2.alt}
                />

                <Card 
                    title='Man in the High Castle Review with Forrest Macneil'
                    description='Semi fictional book review of Man in the High Castle'
                    href='https://donovanfrazier.com/journalism/review.html'
                />

                <Card
                    title='Comparative Analysis of Minh Mạng and Nguyễn Thị Bình'
                    description='Historical analysis of two major Vietnamese figures'
                    href='https://donovanfrazier.com/journalism/vietnam.html'
                    imgSrc='images/vietnamMap.png'
                    alt='Map of Dai Nam Vietname from the 1820s'
                />

                <Card
                    title='Corruption of the Janissaries'
                    description='Analysis of the military unit known as the Janissaries in the Ottoman Empire'
                    href='https://donovanfrazier.com/journalism/janissaries.html'
                    imgSrc='images/janissaries.jpg'
                    alt='Three janissary soldiers standing aboard a ship'
                />
            </div>
        </div>
    )
}