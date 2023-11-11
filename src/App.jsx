 //import './App.css'

import { Routes, Route } from 'react-router-dom';
import NavigationMenuDark from './components/NavigationMenuDark.jsx';

import HeaderHome from './components/HeaderHome';
import OurServices from './components/OurServices';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import WhatClientSay2 from './components/WhatClientSay2';
//import WhatClientSay from './components/WhatClientSay';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import PageAbout from './components/page/PageAbout';
import PageTeam from './components/page/PageTeam.jsx';
import PageOurService from './components/page/PageOurService.jsx';
import PageWhyUs from './components/page/PageWhyUs.jsx';
import PageHome from './components/page/PageHome';
import HeaderMenuDark from './components/HeaderMenuDark.jsx';



function App() {
  return (
    <>
    
      < div className="sub_page">
     
        <NavigationMenuDark />
        
        <Routes>
          <Route path="/" element={<HeaderHome/>}/>
          <Route path="/about" element={<About/>}/>



        </Routes>

       
        <InfoSection />
        <Footer />

      
      </div>

    </>
  )

}

export default App
