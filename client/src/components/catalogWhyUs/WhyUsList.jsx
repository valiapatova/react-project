import { useState, useEffect } from 'react';

import WhyUsItem from './WhyUsItem.jsx';


const baseUrl = 'http://localhost:3030/data';  //server api
//const baseUrl = 'http://localhost:3030/jsonstore'; 

const WhyUsList = () => {



    const [services, setServices] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${baseUrl}/services`, { signal: abortController.signal })
            .then(res => res.json())
            .then(data => {
                setServices(data);
                //setServices(Object.values(data));
            });

        return () => {
            abortController.abort();
        }


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