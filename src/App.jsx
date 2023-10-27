import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
import Header from './components/Header';
import OurServices from './components/OurServices';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Team from './components/Team';
import WhatClientSay from './components/WhatClientSay';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Header/>
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
