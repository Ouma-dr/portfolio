import React from 'react'
import  { FaArrowRight, FaEnvelope ,FaGithub, FaLinkedin, FaPhone} from 'react-icons/fa'
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
    <div className='desc'>
      <div className='title'>
        <h2> Contact</h2>
        <FaArrowRight size={20} style={{color: '#9606cf'}}/>
      </div>
        <p>Feel free to Contact me I will get back to you as soon as possible
        </p>
    </div>
    <div className='logo'>
      <div className='contact-desc'>
        <FaEnvelope size={20} style={{color: '#9606cf'}}/>
        <p>oumaymadridi905@gmail.com</p>
      </div>
      <div className='contact-desc'>
      <FaPhone size={20} style={{color: '#9606cf'}}/>
        <p>(216) 28 318 655</p>
      </div>
      <div className='contact-desc'>
      <FaGithub size={20} style={{color: '#9606cf'}}/>
        <p>Ouma-dr</p>
      </div>
      <div className='contact-desc'>
      <FaLinkedin size={20} style={{color: '#9606cf'}}/>
        <p>oumayma-dridi-506555224</p>
      </div>
      
      
      
      
    </div>
    </div>
  )
}

export default Contact