import { useState } from 'react';
import styles from './Register.module.css';

const initialFormValuesState = {
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: ""
};
const Register = () => {

    const [formValues, setFormValues] = useState(initialFormValuesState);
    const [errors, setErrors] = useState({});


    const changeHandler = (e) => {

        let value = '';
        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        };

        setFormValues(state => ({
            ...state,
            [e.target.name]: value    //e.target.value,
        }));

        console.log(formValues)
    };

    const resetFormHandler = () => {
        setFormValues(initialFormValuesState)
        setErrors({});
        console.log(formValues);
        console.log(errors);
    };

    const submitFormHandler = (e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(errors);

        resetFormHandler();
    }

    const errorsValidator = () => {
        if (formValues.username.length > 35) {

            setErrors(state => ({
                ...state,
                username: "Потребителското име е твърде дълго"
            }));
        } else {
            if (errors.username) {
                setErrors(state => ({ ...state, username: '' }));
            }
        };
    };



    return (

        <div className="container mt-2 mb-2">

            <h2>Регистрация</h2>

            <form onSubmit={submitFormHandler}>

                <div className="form-group">
                    <label htmlFor="username">Потребителско име</label>
                   
                    <input type="text"
                        name="username"
                        id="username"
                        //className="form-control"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={errorsValidator}
                        className={errors.username ? styles.inputError:"form-control"}
                    />
                  

                    {errors.username && (
                        <p className={styles.errorMessage}>{errors.username}</p>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Парола</label>
                    <input type="password"
                        name="password"
                        id="password"
                        className="form-control"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Потвърди паролата</label>
                    <input type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="form-control"
                        value={formValues.confirmPassword}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">Име</label>
                    <input type="text"
                        name="firstName"
                        id="firstName"
                        className="form-control"
                        value={formValues.firstName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Фамилия</label>
                    <input type="text"
                        name="lastName"
                        id="lastName"
                        className="form-control"
                        value={formValues.lastName}
                        onChange={changeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        name="email"
                        id="email"
                        className="form-control"
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                </div>


                <div className="form-group">
                    <button
                        type="submit"
                        className={styles.btnGreen}
                        disabled={Object.values(errors).some(x=>x)}
                    >
                        Регистрация
                    </button>

                    <button
                        type="button"
                        className={styles.btnGrey}
                        onClick={resetFormHandler}
                    >
                        Изчисти
                    </button>
                    {/* <a className={styles.btnOringe}>Вход</a> */}

                </div>

            </form>

        </div>


    );
};

export default Register