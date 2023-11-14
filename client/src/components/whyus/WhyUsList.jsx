import { useState, useEffect } from 'react';

const baseUrl = 'http://localhost:3030/jsonstore/';  //server api

const WhyUsList = () => {

    const [services, setServices] = useState([]);

    useEffect = (() => {
        fetch(`${baseUrl}/services`)
            .then(responce => responce.json())
            .then(setServices(services))
            .catch(err => console.log(err))
    }, []);

    





};