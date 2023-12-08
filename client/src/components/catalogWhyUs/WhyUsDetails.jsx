import { useEffect, useState } from 'react';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as styles from './WhyUsDetails.module.css';
import Path from '../../paths';


const baseUrl = 'http://localhost:3030/data/services';
//const baseUrl='http://localhost:3030/jsonstore/services';

export default function WhyUsDetails() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const [service, setService] = useState({});

    console.log(id);

    console.log(`useLocation: ${location.pathname}`);

    useEffect(() => {
        fetch(`${baseUrl}/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Not Found')
                }
                return response.json();
            })
            .then(data => setService(data))
            .catch((err) => {
                navigate('/whyus');

            });

    }, [id]);


    return (
        <div className={styles.detailContainer}>
            <div className="box">
                <div className="img-box">
                    <img src={service.imageUrl} alt="" />
                </div>
                <div className="detail-box">
                    <h5>
                        {service.title}
                    </h5>
                    <p>
                        {service.summary}
                    </p>
                    <p>
                        {service.summary2}
                    </p>

                    <Link to={Path.WhyUs}>                        
                        Върни се на каталог услуги
                    </Link>

                </div>

            </div>
        </div>


    );
};