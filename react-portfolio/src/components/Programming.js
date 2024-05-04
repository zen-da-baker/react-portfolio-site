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

            <h2>Web Applications</h2>

            <div className='gallery'>
                <Card 
                    title='Meal Timer' 
                    description='React Application' 
                    href='https://zinniafrazier.com/projects/meal-timer/'
                />

                <Card title='Sleep Calculator' description='React Application' />
                <Card title='Radiant Sun' description='RPG Maker Video Game' />
                <Card title='Quits By Ginny' description='Organization Landingpage' />
                <Card title='Artr' description='Landing page of a social network app' />
            </div>
        </div>
    )
}