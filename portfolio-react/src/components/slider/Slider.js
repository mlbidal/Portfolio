import React from 'react';
import './Slider.css';
import homeEsocial from '../../media/homeEsocial.png'
import homeVideogames from '../../media/homeVideogames.png'
import esocialBuy from '../../media/esocialBuy.png'

const Slider = () => {
  return (
    
    <div className='carouselContainer'>
        <di className='carouseltittle'>
            <h1>My projects</h1>
        </di>
            
            <div className="slideContainer">
                <img className='img' src={homeEsocial} alt= 'Project 1'/>
                <div className="slideDesc">
                    <span> Project E-SOCIAL</span>
                </div>
            </div>
            <div className="slideContainer">
                <img className='img' src={homeVideogames} alt= 'Project 2' />
                <div className="slideDesc">
                    <span> Project Video Games</span>
                </div>
            </div>
            <div className="slideContainer">
                <img className='img' src={esocialBuy} alt= 'Project 3'/>
                <div className="slideDesc">
                    <span> Project Food</span>
                </div>
            </div>
    </div>
  )
}

export default Slider