 //import './App.css'

import { Routes, Route } from 'react-router-dom';
import NavigationMenuDark from './components/navigationMenu/NavigationMenuDark.jsx';

import HeaderHome from './components/home/HeaderHome.jsx';
import OurServices from './components/ourServices/OurServices.jsx';
import About from './components/about/About.jsx';
import WhyUs from './components/catalogWhyUs/WhyUs.jsx';
import WhyUsDetails from './components/catalogWhyUs/WhyUsDetails.jsx';
import Team from './components/Team';

import OurClients from './components/OurClients';
import InfoSection from './components/footer/InfoSection.jsx';
import Footer from './components/footer/Footer.jsx';
import NotFound from './components/notFound/NotFound.jsx';

import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx';

import PostList from './components/post-list/PostList.jsx'
import PostDetails from './components/post-details/PostDetails.jsx'



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
