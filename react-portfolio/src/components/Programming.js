// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import components
import Card from './Card';

// Import database
import data from '../database/cardData';

export default function Programming() {
    return (
        <div className='app-body'>
            <h1 className='center'>Programming</h1>

            <h2 className='center'>Web Applications</h2>

            <div className='gallery'>
                <Card 
                    title={data.programming.program1.title} 
                    description={data.programming.program1.description}
                    href={data.programming.program1.href}
                    src={data.programming.program1.src}
                    alt={data.programming.program1.alt}
                />

                <Card 
                    title={data.programming.program2.title}
                    description={data.programming.program2.description}
                    href={data.programming.program2.href}
                    src={data.programming.program2.src}
                    alt={data.programming.program2.alt}
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
                    imgSrc='images/artrfooter.png'
                    alt='Artr landing page'
                />
            </div>
        </div>
    )
}