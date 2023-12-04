
import { Link } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/authContex.jsx';
import Path from '../../paths.js';

const InfoSection = function () {
    const {
        isAuthenticated,
        username,

    } = useContext(AuthContext);

    return (
        <section className="info_section layout_padding2">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_contact">
                            <h6>
                                ж.к "Света Троица" бл.145 вх.Б
                            </h6>
                            <div className="contact_link_box">
                                <a href="">
                                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                                    <span>
                                        София
                                    </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <span>
                                        Тел:  +359 898 618611
                                    </span>
                                </a>
                                <a href="">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <span>
                                        ragon@abv.bg
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="info_social">
                            <a href="">
                                <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                            <a href="">
                                <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>



                    <div className="col-md-6 col-lg-3 info_col">
                        <div className="info_detail">
                            <h4>
                                "Рагон 14" ООД
                            </h4>
                            <p>
                                Предлагаме услуги съгласно "Закона за здравословни и безопасни условия на труд".
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-2 mx-auto info_col">
                        <div className="info_link_box">
                            <h4>
                                Препратки
                            </h4>
                            <div className="info_links">
                                <Link to="/" className="active" >
                                    Начало
                                </Link>
                                <Link to="/about" className="">
                                    За нас
                                </Link>
                                <Link to="/services" className="">
                                    Услуги
                                </Link>
                                <Link to="/whyus" className="" >
                                    Защо ние
                                </Link>
                                {/* <Link to="/team" className="" >
                                    Екип
                                </Link>
                                <Link to="/clients" className="" >
                                    Клиенти
                                </Link> */}


                                {isAuthenticated && (
                                    <>
                                        <Link to={Path.Posts} className="" >
                                            Медицински карти
                                        </Link>
                                        <Link to={Path.PostCreate} className="" >
                                            Създай карта
                                        </Link>
                                    </>
                                )}


                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-lg-3 info_col ">
                        <div className="img-box">
                            <img src="images/slider-img.jpg" alt="" />
                        </div>
                        {/* <form action="#">
                            <input type="text" placeholder="Enter email" />
                            <button type="submit">
                                Изпрати съобщение
                            </button>
                        </form> */}
                    </div>



                </div>
            </div>
        </section>
    );
};
export default InfoSection;