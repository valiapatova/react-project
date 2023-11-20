import {Link} from 'react-router-dom';

export default function About() {
    return (
        <section className="about_section layout_padding">
            <div className="container  ">
                <div className="heading_container heading_center">
                    <h2>
                        За  <span>нас</span>
                    </h2>
                    <p>
                    Служба по трудова медицина "РАГОН 14" ООД предоставя комплексно обслужване по осигуряване на здравословни и безопасни условия на труд.
                    </p>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="img-box">
                            <img src="images/about-img.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="detail-box">
                            <h3>
                                Ние сме "Рагон 14" ООД
                            </h3>
                            <p>
                            Служба по трудова медицина "РАГОН 14" ООД е регистрирана в Министерство на здравеопазването под № 575 / 04.07.2014 г.
                            </p>
                            <p>
                            Нашите услуги обхващат пълния обем от задължителни дейности съгласно ЗЗБУТ и Наредба № 14 на МЗ
                            </p>
                            <Link to="/whyus">
                                Нашите клиенти
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

};