import React from 'react'
import './About.css'
import me from '../../media/me.jpg'

const About = () => {
  return (
    <div className='aboutContainer'>
        <div className='aboutDesc'>
            <h3>Let me tell you something about me</h3>
            <p>I'm a passionate Full Stack developer from Argentina to 🌎,</p>
            <p>currently studying business and systems administration 🤓,</p>
            <p>I'm passionate about constantly learning new technologies and techniques to develop better and more interactive user interfaces 🥰,</p>
            <p>I love dogs 🐶</p>
        </div>
        <div className='aboutImg'>
            <img src={me} alt='Lucia Bidal'></img>
        </div>
    </div>
  )
}

export default About