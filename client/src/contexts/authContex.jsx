import { createContext } from "react";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService.js';
import Path from "../paths.js";


const AuthContext = createContext();

// logic from App.jsx

export const AuthProvider = ({

    children
}) => {

    const navigate = useNavigate();

    const [auth, setAuth] = useState(() => {
        localStorage.removeItem('accessToken');

        return {};
    });

    const [errorMessage, setErrorMessage] = useState({});

    const errorHandler = (err) => {
        setErrorMessage(state => ({ ...state, text: `${err.message}` }));
        navigate(Path.Error);


    }


    const loginSubmitHandler = async (values) => {

        console.log(values);    // values, taked from Login input form.
        //values   --- {Peter:"peter@abv.bg",password:"123456"}

        try {
            const result = await authService.login(values.email, values.password);

            console.log(result) // object from JSON returned by server
            // result --- returned from server
            // {
            //    email: 'peter@abv.bg',
            //    username: 'Peter',
            //    _id: '35c62d76-8152-4626-8712-eeb96381bea8',
            //    accessToken: '2b3b3801aee5cd8fee64aed417048fe9d22398a3c5cd2e974f449b3e6883f58e'
            //   }
            //or
            //	{code: 403, message: "Login or password don't match"}    


            setAuth(result);

            localStorage.setItem('accessToken', result.accessToken);

            navigate(Path.Home)

        } catch (error) {

            // setErrorMessage(state => ({ ...state, text: `${error.message}` }));
            // navigate(Path.Error);

            errorHandler(error);
        }

    };



    const registerSubmitHandler = async (values) => {

        console.log(values); // values, taked from Register input form. 
        //values  ---    {email: 'valentina.patova@abv.bg', password: '123', confirmPassword: '123'}    

        if (values.password !== values.confirmPassword) {

            console.log('Паролата за потвърждение не съвпада с въведената парола!');

            setErrorMessage(state => ({ ...state, text: 'Паролата за потвърждение не съвпада с въведената парола!' }));
            navigate(Path.Error);


        } else {

            try {

                const result = await authService.register(values.email, values.username, values.password);

                console.log(result);

                //   {
                //     "email": "valentina@abv.bg",
                //     "username": "valentina",
                //     "password": "123",
                //     "_createdOn": 1700945747247,
                //     "_id": "216542ec-9339-41d8-9686-9046609484a9",
                //     "accessToken": "8a2496b7da54a1734349cd4408d82f7bb26856ba8635762fd7ef760a248760fd"
                // }

                setAuth(result);
                localStorage.setItem('accessToken', result.accessToken);

                navigate(Path.Home);

            } catch (error) {

                // setErrorMessage(state => ({ ...state, text: `${error.message}` }));
                // navigate(Path.Error);

                errorHandler(error);
            }

        }

    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');

        navigate(Path.Home);
    }



    const values = {

        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        errorHandler,
        errorMessage,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,

    }



    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>

    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;