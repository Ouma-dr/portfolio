import React from 'react'
import  { FaArrowRight } from 'react-icons/fa'
import { portfolio } from '../data.js'
import WorkItems from '../components/WorkItems.js'
import '../styles/Work.css';

const Work = () => {
  return (
    <div className='work'>
    <div className='desc'>
       <div className='title'>
         <h2> Portfolio</h2>
         <FaArrowRight size={20} style={{color: '#9606cf'}}/>
       </div> 
        <p>Here you will find some of the personal projects that I created.</p> 
    </div>
    <div className='portfolio'>
      
      {portfolio.map((item) => {
            return <WorkItems item={item} key={item.id} />
      })}
      
      
      </div>
    
    </div>
  )
}

export default Work