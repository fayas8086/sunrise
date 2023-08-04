import Header from './Components/Header/Header';
import './App.css';
import {  Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer'
import About from './pages/About/About'
import Messagr from './pages/Message/Messagr'

import Home from './pages/Home/Home';
import Inform from './pages/Inform/Inform';
import Serv from './pages/Serv/Serve'
import Galary from './pages/Gal/Galary'


function App() {
  return (
   <>
     
     <Header/>
     <Routes>
     

        <Route path="/" element={<Home />} />
        <Route path="/Aboutus" element={<About />} />
        <Route path="/message" element={ <>
              <About/>
              <Messagr />
               </>} />
               <Route path="/info" element={ <>
              <About/>
              <Inform />
               </>} />
               <Route path="/serv" element={ <>
              <About/>
              <Serv/>
               </>} />
               <Route path="/galary" element={ <>
              <About/>
              <Galary/>
               </>} />
        
        
      </Routes>
      
      <Footer/>
   
  
   
   </>
  );
}

export default App;
