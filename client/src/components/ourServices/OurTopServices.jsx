import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as whyusService from '../../services/whyusService.js'
import Path from '../../paths.js';

import TopService from './top-service/TopService.jsx';


export default function OurTopServices() {

    const [topServices, setTopServices] = useState([]);

    useEffect(() => {
        whyusService.getTopThree()
            .then(result => setTopServices(result));
    }, []);



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
                       
                            {topServices.map((topService) =>
                                <TopService
                                    key={topService._id}
                                    {...topService}
                                />
                            )}
                        
                    </div>

                    {!topServices.length && <p>Няма въведени услуги</p>}


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