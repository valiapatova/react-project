import { useContext, useState, useEffect } from 'react';

import styles from './Register.module.css';

import AuthContext from '../../contexts/authContex';
import useForm from '../../hooks/useForm';

// const initialFormValuesState = {
//     username: "",
//     password: "",
//     confirmPassword: "",
//     email: ""
// };

const RegisterFormKeys = {

    // Username: "username",
    Email: "email",
    Username: "username",
    Password: "password",
    ConfirmPassword: "confirmPassword",
}


const Register = () => {

    const { registerSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit, onReset } = useForm(registerSubmitHandler, {
        [RegisterFormKeys.Email]: '',
        [RegisterFormKeys.Username]: '',
        [RegisterFormKeys.Password]: '',
        [RegisterFormKeys.ConfirmPassword]: '',

    })

    const [errors, setErrors] = useState({});


    useEffect(() => {

        console.log('Errors ' + values.email);

        if (values[RegisterFormKeys.Email].length > 30) {

            setErrors(state => ({
                ...state,
                [RegisterFormKeys.Email]: "Имейла е твърде дълъг !"
            }));

        } else {
            if (errors[RegisterFormKeys.Email]) {

                setErrors(state => ({
                    ...state,
                    [RegisterFormKeys.Email]: ''
                }));
            }
        };

        console.log('Errors ' + values.username);

        if (values[RegisterFormKeys.Username].length > 30) {

            setErrors(state => ({
                ...state,
                [RegisterFormKeys.Username]: "Потребителското име е твърде дълъго !"
            }));

        } else {
            if (errors[RegisterFormKeys.Username]) {

                setErrors(state => ({
                    ...state,
                    [RegisterFormKeys.Username]: ''
                }));
            }
        };

    }, [values]);


    return (
        <div className={styles.regContainer}>

            <div className="container mt-2 mb-2" >

                <h2>Регистрация</h2>

                <form onSubmit={onSubmit}>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email"
                            name={RegisterFormKeys.Email}
                            id="email"
                            className={errors[RegisterFormKeys.Email] ? styles.inputError : "form-control"}
                            value={values[RegisterFormKeys.Email]}
                            onChange={onChange}
                            required
                        />
                        {errors[RegisterFormKeys.Email] && (
                            <p className={styles.errorMessage}>{errors[RegisterFormKeys.Email]}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Потребителско име</label>

                        <input type="text"
                            name={RegisterFormKeys.Username}
                            id="username"   
                            className={errors.username ? styles.inputError : "form-control"}                         
                            value={values[RegisterFormKeys.Username]}
                            onChange={onChange}                            
                        />
                        {errors[RegisterFormKeys.Username] && (
                            <p className={styles.errorMessage}>{errors[RegisterFormKeys.Username]}</p>
                        )}                        
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Парола</label>
                        <input type="password"
                            name={RegisterFormKeys.Password}
                            id="password"
                            className="form-control"
                            value={values[RegisterFormKeys.Password]}
                            onChange={onChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Потвърди паролата</label>
                        <input type="password"
                            name={RegisterFormKeys.ConfirmPassword}
                            id="confirmPassword"
                            className="form-control"
                            value={values[RegisterFormKeys.ConfirmPassword]}
                            onChange={onChange}
                            required
                        />
                    </div>

                    {/* <div className="form-group">
                    <label htmlFor="firstName">Име</label>
                    <input type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={values.firstName}
                        onChange={onChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Фамилия</label>
                    <input type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        value={values.lastName}
                        onChange={onChange}
                    />
                </div> */}



                    <div className="form-group">
                        <button
                            type="submit"
                            className={styles.btnGreen}
                            disabled={Object.values(errors).some(x => x)}
                        >
                            Регистрация
                        </button>

                        <button
                            type="button"
                            className={styles.btnGrey}
                            onClick={onReset}
                        >
                            Изчисти
                        </button>

                        {/* <a className={styles.btnOringe}>Вход</a>  */}

                    </div>

                </form>

            </div>
        </div>


    );
};

export default Register