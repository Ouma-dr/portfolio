import React from 'react'
import image1 from '../images/image1.jpg';
import '../styles/Hero.css';

const Hero = () => {
  const onButtonClick = () => {
    const pdfUrl = "cv23.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "document.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};
  return (
    <div className='hero'>
        <div className='img'>
           <img src={image1} alt='user'/>
        </div>
        <div className='info'>
          <h2>i'm <span>Oumayma DRIDI</span></h2>
          <h4>Web Developer</h4>
          
            <button onClick={onButtonClick}>Download CV</button>
        
        </div>
        
    
    </div>
  )
}

export default Hero