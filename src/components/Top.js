import React , {useState} from 'react'
import  {FaHandPaper, FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../styles/Top.css'

const Top = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className='top'>
       <FaHandPaper className='hand' size={50} style={{color: '#ff56f6'}}/>
       <div className='links' id={showLinks ? "hidden" : ""}>
         <Link className='link' to="/">Home</Link>
         <Link className='link' to="/about">About</Link>
         <Link className='link' to="/skills">Skills</Link>
         <Link className='link' to="/work">Projects</Link>
         <Link className='link' to="/contact">Contact</Link>
       </div>
       <button onClick={()=> setShowLinks(!showLinks)} className='btn'><FaBars/></button>

    </div>
  )
}

export default Top