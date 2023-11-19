 //import './App.css'

import { Routes, Route } from 'react-router-dom';
import NavigationMenuDark from './components/NavigationMenuDark.jsx';

import HeaderHome from './components/HeaderHome';
import OurServices from './components/OurServices';
import About from './components/About';
import WhyUs from './components/whyus/WhyUs.jsx';
import WhyUsDetails from './components/whyus/WhyUsDetails.jsx';
import Team from './components/Team';
// import WhatClientSay1 from './components/WhatClientSay1';
import OurClients from './components/OurClients';
import InfoSection from './components/InfoSection';
import Footer from './components/Footer';
import NotFound from './components/NotFound.jsx';
//import HeaderSlider from './components/HeaderSlider.jsx';
import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx';








function App() {
  return (
    <>
           
      < div className="sub_page">
           
        <NavigationMenuDark />
        
        <Routes>
          <Route path="/" element={<HeaderHome />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<OurServices/>}/>
          <Route path="/whyus" element={<WhyUs/>}/>
          
          <Route path="/whyus/:id" element={<WhyUsDetails/>}/> 

          <Route path="/posts" element={<PostList />} />
           {/* <Route path="/posts/create" element={<PostCreate />} /> */}

          <Route path="/posts/:postId" element={<PostDetails /> } /> 

          <Route path="/team" element={<Team/>}/>
          <Route path="/clients" element={<OurClients/>}/> 

          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route path="*" element={<NotFound/>}/>     
              

        </Routes>

       
        <InfoSection />
        <Footer />

      
      </div>

    </>
  )

}

export default App
