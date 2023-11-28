//import './App.css'
import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService.js';
import AuthContext from './contexts/authContex.js';
import Path from './paths.js';

import NavigationMenu from './components/navigationMenu/NavigationMenu.jsx';
import Home from './components/home/Home.jsx';
import OurServices from './components/ourServices/OurServices.jsx';
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
import PostDelete from './components/post-delete/PostDelete.jsx';

import Error from './components/error/Error.jsx';

// import Team from './components/Team';
// import OurClients from './components/OurClients';



function App() {

  const navigate = useNavigate();

  const [auth, setAuth] = useState(() => {
    localStorage.removeItem('accessToken');

    return {};
  });

  const [errorMessage, SetErrorMessage] = useState('');

  const loginSubmitHandler = async (values) => {

    console.log(values);    // values, taked from Login input form.
    //values   --- {Peter:"peter@abv.bg",password:"123456"}

    const result = await authService.login(values.email, values.password);

    console.log(result) // object from JSON returned by server
    // result --- returned from server
    // {
    //   email: 'peter@abv.bg',
    //    username: 'Peter',
    //    _id: '35c62d76-8152-4626-8712-eeb96381bea8',
    //    accessToken: '2b3b3801aee5cd8fee64aed417048fe9d22398a3c5cd2e974f449b3e6883f58e'
    //   }
    //or
    //	{code: 403, message: "Login or password don't match"}

    setAuth(result);

    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home)
  };

  

  const registerSubmitHandler = async (values) => {
    console.log(values); // values, taked from Register input form. 
    //values  ---    {email: 'valentina.patova@abv.bg', password: '123', confirmPassword: '123'}    

    if (values.password !== values.confirmPassword) {

      console.log('Паролата за потвърждение не съвпада с въведената парола!');

      SetErrorMessage('Паролата за потвърждение не съвпада с въведената парола!' );

      navigate(Path.Error);
    }

    const result = await authService.register(values.email, values.username, values.password);

    console.log(result)

    //   {
    //     "email": "valentina@abv.bg",
    //     "username": "valentina",
    //     "password": "123",
    //     "_createdOn": 1700945747247,
    //     "_id": "216542ec-9339-41d8-9686-9046609484a9",
    //     "accessToken": "8a2496b7da54a1734349cd4408d82f7bb26856ba8635762fd7ef760a248760fd"
    // }

    setAuth(result);
    localStorage.setItem('accessToken', result.accessToken);

    navigate(Path.Home);

  };

  const logoutHandler = () => {
    setAuth({});
    localStorage.removeItem('accessToken');

    navigate(Path.Home);

  }

  const values = {

    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username || auth.email,
    email: auth.email,
    userId: auth._id,
    isAuthenticated: !!auth.accessToken,

  }

  return (
    <AuthContext.Provider value={values}>

      < div className="sub_page">

        <NavigationMenu />

        <Routes>
          <Route path={Path.Home} element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<OurServices />} />
          <Route path={Path.WhyUs} element={<WhyUs />} />

          <Route path="/whyus/:id" element={<WhyUsDetails />} />

          <Route path={Path.Posts} element={<PostList/>} />

          <Route path={Path.PostDetails} element={<PostDetails/>} />

          <Route path={Path.PostCreate} element={<PostCreate/>}/>
          <Route path={Path.PostEdit} element={<PostEdit/>} />
          <Route path={Path.PostDelete} element={<PostDelete />} />

          {/* <Route path="/team" element={<Team/>}/>
          <Route path="/clients" element={<OurClients/>}/>  */}

          <Route path={Path.Login} element={<Login />} />

          <Route path={Path.Register} element={<Register />} />

          <Route path={Path.Logout} element={<Logout />} />

          <Route path={Path.NotFound} element={<NotFound />} />

          <Route path={Path.Error} element={<Error message={errorMessage} />} />

        </Routes>

        <InfoSection />
        <Footer />

      </div>

    </AuthContext.Provider>
  )

}

export default App
