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
                    imgSrc='images/mealtimer.png'
                    alt='Meal timer all that calculates when the user should eat a meal'
                />

                <Card 
                    title='Sleep Calculator' 
                    description='React Application'
                    href='https://zinniafrazier.com/projects/sleep-calculator/'
                    imgSrc='images/sleepcalculator.png'
                    alt='Sleep calculator used to determine a bedtime based on the user wake up time'
                />

                <Card 
                    title='Radiant Sun' 
                    description='RPG Maker Video Game' 
                    href='https://radiantsun.net/'
                    imgSrc='images/radiantsun.png'
                    alt='Radiant Sun gameplay'
                />

                <Card 
                    title='Quits By Ginny' 
                    description='Organization Landingpage' 
                    href='https://quiltsbyginny.com/'
                    imgSrc='images/quiltsbyginny.png'
                    alt='The Quilts by Ginny homepage'
                />

                <Card 
                    title='Artr' 
                    description='Landing page of a social network app' 
                />
            </div>
        </div>
    )
}