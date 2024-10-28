// Import React
import React from 'react';

export default function About() {

    // const githubIcon = <FontAwesomeIcon icon={faGithub} />
    return (
        <div className='app-body'>
            
            <h1 className='center heading'>About</h1>

            <p className='paragraph'>
                Don is a web developer, writer, and artist based in Riverside, California. 
                They have used all of these deciplines to design eLearning Tutorials as well as web sites for University and private clients. 
                Don is currently looking for employment in web development.
            </p>

            <h2 className="paragraph">Experience</h2>

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
                    <p>2021 - 2023</p>

                    <ul>
                        <li>Schedule and host speaking events for about 20 university students</li>
                        <li>Email and call potential speakers for our organization via networking</li>
                        <li>Design posters advertising upcoming speaking events</li>
                        <li>Maintain speaking event schedules in GSuite and record attendance</li>
                    </ul>
                </div>
            </div>

            <h2 className="paragraph">Education</h2>

            <div className='container'>
                <div className='box'>
                    <h3>University of California, Riverside</h3>
                    <p>Bachelor of Arts - History</p>
                    <p>Bachelor or Arts - Creative Writing</p>
                    <p>2019 - 2022</p>
                </div>

                <div className='box'>
                    <h3>Moreno Valley College</h3>
                    <p>Associate of Arts - Behavioral Sciences</p>
                    <p>Associate of Arts - Communications</p>
                    <p>Associate of Arts - Humanities</p>
                    <p>2017 - 2019</p>
                </div>
            </div>

            <h2 className="paragraph">Links</h2>

                <p className="paragraph">I may be reached through the following: </p>
                
                <div className="container">
                    <a href="https://github.com/zen-da-baker" rel="noreferrer" target="_blank">
                        <img src="./images/icons/github-brands.svg" alt="Github icon" className="icon" />
                        Github
                    </a>
                    <a href="https://www.linkedin.com/in/donovan-frazier-8758b41ba/" rel="noreferrer" target="_blank">
                    
                        <img src="./images/icons/linkedin-brands.svg" alt="LinkedIn icon" className="icon" />
                        LinkedIn
                    </a>
                </div>
        </div>
    )
}