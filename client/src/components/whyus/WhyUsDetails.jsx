import { useEffect, useState } from 'react';

import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


//const baseUrl='http://localhost:3030/jsonstore/whyus/'

export default function WhyUsDetails() {
    const { id } = useParams();
    console.log(id);
    //const location=useLocation();
    const navigate = useNavigate();

    const [service, setService] = useState({});

    //console.log(location.pathname);

    useEffect(() => {
        fetch(`http://localhost:3030/jsonstore/whyus/${id}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Not Found')
                }
                return response.json();
            })
            .then(data => setService(data))
            .catc((err) => {
                navigate('/whyus');

            });

    }, [id]);


    return (
        <div className="box ">
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
                <Link to="/whyus">
                    Върни се назад
                </Link>
            </div>
        </div>


    );
};