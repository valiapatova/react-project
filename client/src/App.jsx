//import './App.css'

import { Routes, Route} from 'react-router-dom';


import {AuthProvider} from './contexts/authContex.jsx';
import Path from './paths.js';

import NavigationMenu from './components/navigationMenu/NavigationMenu.jsx';
import Home from './components/home/Home.jsx';
import OurTopServices from './components/ourServices/OurTopServices.jsx';
import About from './components/about/About.jsx';
import WhyUs from './components/catalogWhyUs/WhyUs.jsx';
import WhyUsDetails from './components/catalogWhyUs/WhyUsDetails.jsx';
import InfoSection from './components/infoSection/InfoSection.jsx';
import Footer from './components/infoSection/Footer.jsx';
import NotFound from './components/notFound/NotFound.jsx';

import Login from './components/login/Login.jsx'
import Register from './components/register/Register.jsx';
import Logout from './components/logout/Logout.jsx';

import PostList from './components/post-list/PostList.jsx'
import PostDetails from './components/post-details/PostDetails.jsx'

import PostCreate from './components/post-create/PostCreate.jsx'
import PostEdit from './components/post-edit/PostEdit.jsx';

import CommentEdit from './components/comment-edit/CommentEdit.jsx';
import CommentDelete from './components/comment-delete/CommentDelete.jsx';

import Error from './components/error/Error.jsx';

// import Team from './components/Team';
// import OurClients from './components/OurClients';



function App() {

// logic in AuthProvider

  return (
    <AuthProvider>

      < div className="sub_page">

        <NavigationMenu />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path={Path.About} element={<About />} />

          <Route path={Path.TopServices} element={<OurTopServices />} />

          <Route path={Path.WhyUs} element={<WhyUs />} />
          <Route path={Path.WhyUsDetails} element={<WhyUsDetails />} />

          <Route path={Path.Posts} element={<PostList />} />
          <Route path={Path.PostDetails} element={<PostDetails />} />
          <Route path={Path.PostCreate} element={<PostCreate />} />
          <Route path={Path.PostEdit} element={<PostEdit />} />  

          <Route path={Path.CommentEdit} element={<CommentEdit/>} />        

          <Route path={Path.CommentDelete} element={<CommentDelete/>} />
       

          <Route path={Path.Login} element={<Login />} />

          <Route path={Path.Register} element={<Register />} />

          <Route path={Path.Logout} element={<Logout />} />

          <Route path={Path.NotFound} element={<NotFound />} />

          <Route path={Path.Error} element={<Error/>} />

        </Routes>

        <InfoSection />
        <Footer />

      </div>

    </AuthProvider>
  )

}

export default App
