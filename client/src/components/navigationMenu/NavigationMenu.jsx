import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContex.js';

import styles from './NavigationMenu.module.css'


export default function NavigationMenu() {

    const {
        isAuthenticated,
        username,

    } = useContext(AuthContext);

    return (
        <div className="hero_area">

            <div className="hero_bg_box">
                <div className="bg_img_box">
                    <img src="images/hero-bg.png" alt="" />
                </div>
            </div>

            <header className="header_section">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg custom_nav-container ">
                        {/* <a className="navbar-brand" href="/about"> */}
                        <Link to="/about" className="navbar-brand" >
                            <span>
                                Рагон 14 ООД
                                {isAuthenticated && <span style={{marginLeft: '20px', color: 'red'} }> Здравей {username} ! </span>}
                            </span>
                        </Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className=""> </span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    {/* <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a> */}
                                    <Link to="/" className="nav-link" >Начало <span className="sr-only">(current)</span></Link>

                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link" > За нас</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" >Top услуги</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/whyus" className="nav-link" >Каталог услуги</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/posts" className="nav-link" >Медицински карти</Link>
                                </li>

                                {isAuthenticated && (
                                    <div id="user" >

                                        <li className="nav-item" style={{ display: 'inline-block'}} >
                                            <Link to="/posts/create" className="nav-link" >Създай карта</Link>

                                        </li>
                                        <li className="nav-item" style={{ display: 'inline-block'}}>
                                            <Link to="/logout" className="nav-link">
                                                Изход
                                                {/* <span style={{ marginLeft: '20px', color: 'red' }}> Здравей {username} ! </span> */}
                                            </Link>
                                        </li>

                                    </div>
                                )}


                                {!isAuthenticated && (

                                    <div id="guest">
                                        <li className="nav-item" style={{ display: 'inline-block'}}>
                                            <Link to="/login" className="nav-link" > <i className="fa fa-user" aria-hidden="true" style={{color:"green"}}></i> Вход</Link>
                                        </li>

                                        <li className="nav-item" style={{ display: 'inline-block'}}>
                                            <Link to="/register" className="nav-link" > <i className="fa fa-user" aria-hidden="true" style={{color:"#e76828"}}></i>Регистрация</Link>
                                        </li>

                                    </div>

                                )}

                                {/* <li className="nav-item">                                
                                <Link to="/team" className="nav-link" >Екип</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/clients" className="nav-link" >Клиенти</Link>
                            </li> */}

                                {/* <form className="form-inline">
                                <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                                    <i className="fa fa-search" aria-hidden="true"></i>
                                </button>
                            </form> */}

                            </ul>
                        </div>
                    </nav>
                </div >
            </header >

        </div>
    );

};