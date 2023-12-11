import React from 'react'
import '../styles/WorkItems.css'

const WorkItems = ({item}) => {
    return (
      <div className='workItems' key={item.id}>
           <img src={item.img} alt=''/>
           <div className='Info'>
             <h3>{item.title}</h3>
             <a href={item.demo} className='Link'>Demo</a>
           </div>
        
      
      </div>
    )
  }
  
  export default WorkItems