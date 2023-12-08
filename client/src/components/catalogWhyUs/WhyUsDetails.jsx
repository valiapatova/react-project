import { useEffect, useState, useContext } from 'react';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import * as styles from './WhyUsDetails.module.css';
import Path from '../../paths';
import AuthContext from '../../contexts/authContex';
import * as whyusService from '../../services/whyusService.js';


const baseUrl = 'http://localhost:3030/data/services';
//const baseUrl='http://localhost:3030/jsonstore/services';

export default function WhyUsDetails() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();

    const {
        userId

    } = useContext(AuthContext);

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

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Сигурни ли сте, че искате да изтриете услугата за ${service.title} ?`);

        if (hasConfirmed) {

            await whyusService.remove(id);

            navigate(Path.WhyUs);
        }
    };


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



                    {/* Edit/Delete buttons ( Only for creator of this service)   */}

                    {userId === service._ownerId && (

                        <div className={styles.buttons}>

                            {/* <Link to={pathToUrl(Path.PostEdit, { postId })} className={styles.button}>Редактирай карта</Link> */}

                            <button className={styles.buttonDelete} onClick={deleteButtonClickHandler}>Изтрий услуга</button>

                        </div>

                    )}



                    <Link to={Path.WhyUs}>
                        Върни се на каталог услуги
                    </Link>

                </div>

            </div>
        </div>


    );
};