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

    
        // {
        //     "_ownerId": "35c62d76-8152-4626-8712-eeb96381bea8",
        //     "title": " Медицински прегледи на място",
        //     "category": "Документи",
        //     "maxLevel": "112",
        //     "imageUrl": " https://res.cloudinary.com/doifgnlmu/image/upload/v1699963837/nedicalSimbol2_tttmlq.png",
        //     "summary": " Службата разполага с вискотехнологична диагностична апаратура и предлага извършване на профилактични медицински прегледи на място в офиса на клиента, както и в собствения офис. ",
        //     "summary2": " Прегледи: преглед с Биоскенер за квантова диагностика, пълна гама ехографии, очен лекар, очна компютърна диагностика, кардиолог – ЕКГ, вътрешни болести, невролог.",
        //     "_createdOn": 1701270598461,
        //     "_id": "3564027f-adcd-4425-b2c0-1253d2386c0c"
        // }

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

                            {/* <Link to={pathToUrl(Path.WhyUsEdit, {whyusId:service._id})} className={styles.button}>Редактирай услуга</Link> */}

                            <Link to={`/whyus/${service._id}/edit`} className={styles.button}>Редактирай услуга</Link>

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