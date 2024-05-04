// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import components
import Card from './Card';

export default function Education() {
    return (
        <div className='app-body'>
            <h1>Education</h1>

            <h2>eLearning Tutorials</h2>

            <div className='gallery'>
                <Card 
                    title='Get it at UC' 
                    description='VPN access tutorial' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/getitatucweb/content/index.html#/'
                />

                <Card 
                    title='Keyword Development' 
                    description='Search engine keyword tutorial' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/keyword_development/content/index.html#/'
                />

                <Card 
                    title='Boolean Operators' 
                    description='Search engine strategies' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/boolean_operators/content/index.html#/'
                />

                <Card 
                    title='Call Numbers' 
                    description='Library of Congress tutorial' 
                    href='https://ucrlibraryteachingandlearning.github.io/learningobjects/call_numbers/content/index.html#/'
                />
            </div>
        </div>
    )
}