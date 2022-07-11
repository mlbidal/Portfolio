import React from 'react';
import  './Cover.css';
import coverVideo from '../../media/coverVideo.mp4';

const Cover = () => {
  return (
    <div className='coverContainer'>
        <video className='video'
        src={coverVideo} 
        autoPlay 
        loop 
        muted
        />
        <h1>María Lucía Bidal</h1>
        <p>Full-Stack Web Developer</p>
    </div>
  )
}

export default Cover