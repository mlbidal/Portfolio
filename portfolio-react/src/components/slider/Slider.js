import React from 'react';
import './Slider.css';
import esocial from '../../media/esocial.png'
import videogames from '../../media/videogames.png'
import food from '../../media/food.png'

const Slider = () => {
  return (
    
    <div className='carouselContainer'>
        <di className='carouseltittle'>
            <h1>My projects</h1>
        </di>
            
            <div className="slideContainer">
                <a href='https://e-social-book.netlify.app/' target='_blank' rel="noreferrer">
                <img className='img' src={esocial} alt= 'Project 1' />
                <div className="slideDesc">
                    <span> Project E-SOCIAL</span>
                </div>
                </a>
            </div>
            <div className="slideContainer">
            <a href='https://video-games-malu.vercel.app/home' target='_blank' rel="noreferrer">
                <img className='img' src={videogames} alt= 'Project 2' />
                <div className="slideDesc">
                    <span> Project Video Games</span>
                </div>
                </a>
            </div>
            <div className="slideContainer">
            <a href='https://github.com/mlbidal/PI-FOOD' target='_blank' rel="noreferrer">
                <img className='img' src={food} alt= 'Project 3'/>
                <div className="slideDesc">
                    <span> Project Food</span>
                </div>
                </a>
            </div>
    </div>
  )
}

export default Slider