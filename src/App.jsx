import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import HeaderHome from './components/HeaderHome';
import OurServices from './components/OurServices';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import WhatClientSay from './components/WhatClientSay';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import SubPageMenuDark from './components/SubPageMenuDark';


function App() {
  
  return (
    <> 
    <SubPageMenuDark/>  

      <HeaderHome/>
      <OurServices/>       
      <About/>
      <WhyUs/>
      <Team/>
      <WhatClientSay/>
      <InfoSection/>      
      <Footer/>

    </>
  )
}

export default App
