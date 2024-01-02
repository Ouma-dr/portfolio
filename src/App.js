import React from 'react'
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import {HashRouter ,Routes, Route } from 'react-router-dom'; 
import Skills from './pages/Skills';

function App() {
  
  return (

    <div className="App">
    <HashRouter >
      <Routes>
         <Route exact path='/' element={ <Home/>}/>
         <Route exact path='/about' element={ <About/>}/>
         <Route exact path='/skills' element={ <Skills/>}/>
         <Route exact path='/work' element={ <Work/>}/>
         <Route exact path='/contact' element={ <Contact/>}/>
     </Routes>
    
    </HashRouter>
    
    
    
    </div>
  );
}

export default App;
