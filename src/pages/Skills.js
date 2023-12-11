import React from 'react'
import  { FaArrowRight } from 'react-icons/fa'
import image1 from '../images/html.png';
import image2 from '../images/css.png';
import image3 from '../images/js.png';
import image4 from '../images/react.png';
import image5 from '../images/tailwind.png';
import image6 from '../images/git.png';
import image7 from '../images/styledComp.png';
import image8 from '../images/typescript.png';
import image9 from '../images/redux.png';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className='skills'>
    <div className='desc'>
      <div className='title'>
        <h2> Skills</h2>
        <FaArrowRight size={20} style={{color: '#9606cf'}}/>
      </div>
        <p>Here you will find more information about my current skills mostly in terms of programming and technology.
        </p>
    </div>

    <div className='cards'>
       <div className='card'>
         <img src={image1} alt=''/>
         <h3>Html</h3>
       </div>
       <div className='card'>
         <img src={image2} alt=''/>
         <h3>CSS</h3>
       </div>
       <div className='card'>
         <img src={image3} alt=''/>
         <h3>Javascript</h3>
       </div>
       <div className='card'>
         <img src={image4} alt=''/>
         <h3>React js</h3>
       </div>
       <div className='card'>
         <img src={image8} alt=''/>
         <h3>Typescript</h3>
       </div>
       <div className='card'>
         <img src={image9} alt=''/>
         <h3>Redux Toolkit</h3>
       </div>
       <div className='card'>
         <img src={image5} alt=''/>
         <h3>Tailwind css</h3>
       </div>
       <div className='card'>
         <img src={image7} alt=''/>
         <h3>Styled-Component</h3>
       </div>
       <div className='card'>
         <img src={image6} alt=''/>
         <h3>Git</h3>
       </div>
    
    </div>
    
    
    </div>
  )
}

export default Skills