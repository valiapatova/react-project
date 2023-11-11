import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
// import './App.css'
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
import NavigationMenuDark from './components/NavigationMenuDark.jsx';


function App() {
  
  return (
    <> 
    <NavigationMenuDark/>
      <HeaderHome/>
      <OurServices/>       
      <About/>
      <WhyUs/>
      <Team/>
      {/* <WhatClientSay/> */}
      <WhatClientSay2/>
      <InfoSection/>      
      <Footer/>

      {/* Test outher sub page */}
      {/* <NavigationMenuDark/> */}
      {/* <HeaderHome/> */}
       {/* <PageHome/>
      <PageAbout/>
      <PageTeam/>      
      <PageOurService/>
      <PageWhyUs/>  */}



      
    </>
  )
}

export default App
