import React from 'react'
import { LoremIpsum  } from 'react-lorem-ipsum';
import '../styles/about.css';

function About() {
    return (
        <div className="about">
            <div className="aboutTop">
            </div>
            <div className='aboutBottom'>
                <h1 className='about-heading'>About Us</h1>
                <p className='lorem'>
                    <LoremIpsum p={2} />
                </p>
            </div>
        </div>
    );
}

export default About
