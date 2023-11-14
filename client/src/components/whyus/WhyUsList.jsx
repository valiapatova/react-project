import { useState, useEffect } from 'react';
import WhyUsItem from './WhyUsItem.jsx';

const baseUrl = 'http://localhost:3030/jsonstore';  //server api

const WhyUsList = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        //const abortController = new AbortController();

        fetch(`${baseUrl}/services`)
            .then(res => res.json())
            .then(data => {
                setServices(Object.values(data));
            });
    }, []);

    console.log(services);

    return (
        <div>
            {services.map((service) =>
                <WhyUsItem key={service._id} {...service} />
             
                )}
                </div>
            );
        };
              
  

export default WhyUsList;