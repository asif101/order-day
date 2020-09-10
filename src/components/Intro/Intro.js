import React from 'react'
import shawarma from '../../assets/images/shawarma.svg';
import './Intro.scss'

const Intro = () => {
    return (
        <div className='Intro'>
            <div className='intro-image-container'>
                <img src={shawarma} className="intro-image" alt="logo" />
            </div>
            <div className='intro-text-container'>
                <span>Where are we ordering from today?</span>
            </div>
        </div>
    )
}

export default Intro