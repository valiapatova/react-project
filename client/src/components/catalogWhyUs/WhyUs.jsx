import { useContext } from 'react';
import { Link } from 'react-router-dom';

import AuthContext from '../../contexts/authContex.jsx';
import Path from '../../paths.js';
import WhyUsList from './WhyUsList.jsx';
import * as styles from './WhyUs.module.css';


export default function WhyUs() {
    const {
        isAuthenticated,
        username,

    } = useContext(AuthContext);

    return (
        <section className="why_section layout_padding_custom">
            <div className="container">


                {isAuthenticated && (

                    <div className={styles.btn_box_custom}>

                        <Link to={Path.WhyUsCreate}  >Създай нова услуга</Link>

                    </div>

                )}

                <div className="heading_container heading_center">

                    <h2>
                        Защо да изберете <span>Рагон 14</span>
                    </h2>

                </div>

                <WhyUsList />

                <div className="btn-box">
                    <Link to={Path.Home}>
                        Върни към начало
                    </Link>
                </div>
            </div>
        </section>
    );
};