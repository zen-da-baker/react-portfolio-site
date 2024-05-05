// Import React
import React from 'react';

// Import Styles
import '../App.css';

// Import Card Component
import Card from './Card';

export default function Art() {
    return (
        <div className='app-body'>
            <h1 className='center'>Art</h1>

            <h2 className='center'>Art Projects</h2>

            <div className='gallery'>
                <Card title='Wallpaper' description='This is a wallpaper.'/>
                <Card />
                <Card />
            </div>
        </div>
    )
}