// Import React
import React from 'react';

// Import Styles
import '../App.css';

export default function About() {
    return (
        <div className='app-body'>
            
            <h1 className='center'>About</h1>

            <p className='paragraph'>
                Don is a web developer, writer, and artist based in Riverside, California. They have used all of these deciplines to design 
                eLearning Tutorials as well as web sites for University and private clients. Don is currently looking for employment in web 
                development.
            </p>

            <h2>Experience</h2>

            <div className='container'>
                <div className='box'>
                    <h3>University of California, Riverside, Library - eLearning Developer</h3>
                    <p>2021 - 2023</p>

                    <ul>
                        <li>Develop Qualtrics Netpromoter surveys that access the public response to our tutorials</li>
                        <li>Utilize and create tutorials on database search methodologies and related topics</li>
                        <li>Design elearning tutorials and wep pages for 10,000+ students</li>
                        <li>Develop new skills to support these tasks such as video editing, programming, and data collection</li>
                    </ul>
                </div>

                <div className='box'>
                    <h3>Gamespawn - Outreach Coordinator</h3>
                    <p>2021  2023</p>

                    <ul>
                        <li>Schedule and host speaking events for about 20 university students</li>
                        <li>Email and call potential speakers for our organization via networking</li>
                        <li>Design posters advertising upcoming speaking events</li>
                        <li>Maintain speaking event schedules in GSuite and record attendance</li>
                    </ul>
                </div>
            </div>

            <h2>Education</h2>

            <div className='container'>
                <div className='box'>
                    <h3>University of California, Riverside</h3>
                </div>
            </div>
            
        </div>
    )
}