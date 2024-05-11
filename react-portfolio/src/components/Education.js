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
                    title='Keyword Development' 
                    description='Search engine keyword tutorial' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/keyword_development/content/index.html#/'
                    imgSrc='images/keyworddevelopment.png'
                    alt='Landing page of the Keyword Development eLearning module'
                />

                <Card 
                    title='Boolean Operators' 
                    description='Search engine strategies' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/boolean_operators/content/index.html#/'
                    imgSrc='images/booleanoperators.png'
                    alt='Boolean Operators eLearning tutorial landing page'
                />

                <Card 
                    title='Call Numbers' 
                    description='Library of Congress tutorial' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/call_numbers/content/index.html#/'
                    imgSrc='images/callnumbers.png'
                    alt='Call Numbers eLearning tutorial landing page'
                />
            </div>
        </div>
    )
}