import { Link } from 'react-router-dom';
export default function OurServices() {
    return (
        <section className="service_section layout_padding">
            <div className="service_container">
                <div className="container ">
                    <div className="heading_container heading_center">
                        <h2>
                            Нашите <span>услуги</span>
                        </h2>
                        <p>
                            Трите най-търсени услуги
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-4 ">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/medicalSimbol2.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Медицински прегледи на място
                                    </h5>
                                    <p>
                                        Службата разполага с вискотехнологична диагностична апаратура и предлага извършване на профилактични медицински прегледи на място в офиса на клиента, както и в собствения офис. Прегледите се извършват от висококвалифицирани медицински специалисти.
                                    </p>
                                    <Link to="/whyus">
                                        Прочети повече
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/medicalSimvol3.jfif" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Разработване на документи
                                    </h5>
                                    <p>
                                        Разработване на вътрешни правила за осигуряване на здравословни и безопасни условия на труд/чл. 277, ал. 1 и ал. 2 от КТ/, включващи:
                                    </p>
                                    <Link to="/whyus">
                                        Прочети повече
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div className="box ">
                                <div className="img-box">
                                    <img src="images/medical-simbol1.png" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Оценка на риска
                                    </h5>
                                    <p>
                                        Разработване на програма и оценка на риска /ЗЗБУТ, чл. 16, ал. 1; Наредба № 5 от 21.05.1999 год.; Наредба № 7 от 08.10.1999 год./

                                    </p>
                                    <Link to="/whyus">
                                        Прочети повече
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-box">
                        <Link to="/whyus">
                            Виж всички
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

};