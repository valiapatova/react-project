import {Link} from 'react-router-dom';

import Path from '../../paths.js';
import WhyUsList from './WhyUsList.jsx';



export default function WhyUs() {
    return (
        <section className="why_section layout_padding">
            <div className="container">
                <div className="heading_container heading_center">
                    <h2>
                        Защо да изберете <span>Рагон 14</span>
                    </h2>

                </div>

                <WhyUsList />

                <div className="btn-box">
                    <Link to={Path.Home}>
                        Върни се назад
                    </Link>
                </div>
            </div>
        </section>
    );
};