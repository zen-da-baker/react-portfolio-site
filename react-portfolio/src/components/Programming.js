// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import components
import Card from './Card';

export default function Programming() {
    return (
        <div className='app-body'>
            <h1>Programming</h1>

            <div className='gallery'>
                <Card title='Meal Timer' description='React Application.' />
                <Card title='Sleep Calculator' description='React Application' />
                <Card title='Radiant Sun' description='RPG Maker Video Game' />
                <Card title='Quits By Ginny' description='Organization Landingpage' />
            </div>
        </div>
    )
}