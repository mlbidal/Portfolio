import React from 'react';
import './Slider.css';
import homeEsocial from '../../media/homeEsocial.png'
import homeVideogames from '../../media/homeVideogames.png'
import esocialBuy from '../../media/esocialBuy.png'

const Slider = () => {
  return (
    
    <div className='carouselContainer'>
        <di className='carouseltittle'>
            <h1>My proyects</h1>
        </di>
            
            <div className="slideContainer">
                <img className='img' src={homeEsocial} alt= 'Proyect 1'/>
                <div className="slideDesc">
                    <span> Proyect E-SOCIAL</span>
                </div>
            </div>
            <div className="slideContainer">
                <img className='img' src={homeVideogames} alt= 'Proyect 2' />
                <div className="slideDesc">
                    <span> Proyect Video Games</span>
                </div>
            </div>
            <div className="slideContainer">
                <img className='img' src={esocialBuy} alt= 'Proyect 3'/>
                <div className="slideDesc">
                    <span> Proyect Food</span>
                </div>
            </div>
    </div>
  )
}

export default Slider