import React from 'react'
import  { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa'
import image1 from '../images/image1.jpg';
import '../styles/About.css';


const About = () => {

  
  return (
    <div className='about'>
      <div className='title'>
         <h2> About me</h2>
         <FaArrowRight size={20} style={{color: '#9606cf'}}/>
      </div>
      <div className='body'>
         <div className='image'>
            <img src={image1} alt='user'/>
         </div>
         <div className='para'>
           <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications. 
            Check out some of my work in the Projects section.</p>
           <br/>
           <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to 
           contact me.</p>
           <div className='social'>
             <a href='https://github.com/Ouma-dr'><FaGithub size={30} /></a>
             <a href='https://www.linkedin.com/in/oumayma-dridi-506555224/'><FaLinkedin size={30}/></a>
           </div>
         </div>
      </div>
    
    
    </div>
  )
}

export default About