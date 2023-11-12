import {Link} from 'react-router-dom'
export default function HeaderSlider() {
    return (

        <section className="slider_section ">
            <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Трудова <br />
                                            Медицина
                                        </h1>
                                        <p>
                                        Служба по трудова медицина "РАГОН 14" ООД предоставя комплексно обслужване по осигуряване на здравословни и безопасни условия на труд.
                                        </p>
                                        <div className="btn-box">
                                            <Link to="/whyus" className="btn1">
                                              Прочети повече
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img1.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item ">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                        Трудова <br />
                                        Медицина
                                        </h1>
                                        <p>
                                        Разработване на вътрешни правила за осигуряване на здравословни и безопасни условия на труд.
                                        </p>
                                        <div className="btn-box">
                                        <Link to="/about" className="btn1">
                                                Прочети повече
                                        </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img3.gif" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-6 ">
                                    <div className="detail-box">
                                        <h1>
                                            Трудова <br />
                                            Медицина
                                        </h1>
                                        <p>
                                        Разработване на програма и оценка на риска /ЗЗБУТ, чл. 16, ал. 1; Наредба № 5 от 21.05.1999 год.; Наредба № 7 от 08.10.1999 год./
                                        </p>
                                        <div className="btn-box">
                                            <Link to="/whyus" className="btn1">
                                                Прочети повече
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="img-box">
                                        <img src="images/slider-img.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ol className="carousel-indicators">
                    <li data-target="#customCarousel1" data-slide-to="0" className="active"></li>
                    <li data-target="#customCarousel1" data-slide-to="1"></li>
                    <li data-target="#customCarousel1" data-slide-to="2"></li>
                </ol>
            </div>

        </section>
    );

};