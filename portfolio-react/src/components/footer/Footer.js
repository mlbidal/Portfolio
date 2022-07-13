import React from 'react';
import './Footer.css';
import cv from '../../media/cv.pdf'

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footerInfo'>
        <h1>María Lucía Bidal</h1>
        <p>Based in Buenos Aires, Argentina</p>
        </div>
        <div className='footerContact'>
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
        </div>
        <div className='footerSns'>
            <div className='designBy'>Design By María L. Bidal</div>
            <div className='snsLinks'>
                <a href='https://github.com/mlbidal' target='_blank' rel="noreferrer">
                    <i className='fab fa-github github'>
                    </i>
                </a>
                <a href='https://www.linkedin.com/in/marialuciabidal/' target='_blank' rel="noreferrer">
                    <i className='fab fa-linkedin linkedin'>
                    </i>
                </a>
                <a href='https://twitter.com/marialuciabi' target='_blank' rel="noreferrer">
                    <i className='fab fa-twitter twitter'>
                    </i>
                </a>
                <a href={cv} target='_blank' rel="noreferrer">
                <button className='buttonCv'>Download cv</button>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer