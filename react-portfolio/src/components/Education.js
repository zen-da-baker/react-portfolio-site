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
                <Card title='Get it at UC' description='VPN access tutorial' />
                <Card title='Keyword Development' description='Search engine keyword tutorial' />
                <Card title='Boolean Operators' description='Search engine strategies' />
                <Card title='Call Numbers' description='Library of Congress tutorial' />
            </div>
        </div>
    )
}