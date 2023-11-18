import { useState } from 'react';
import styles from './Register.module.css';

const initialFormValues = {
    username: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    email: ""
};
const Register = () => {

    const [formValues, setFormValues] = useState(initialFormValues);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
        console.log(formValues)
    }




    return (


        <div className="container mt-2 mb-2">

            <h2>Вход</h2>

            <form>
                <div className="form-group">
                    <label htmlFor="username">Потребителско име</label>
                    <input type="text"
                        name="username"
                        id="username"
                        className="form-control"
                        value={formValues.name}
                        onChange={changeHandler}
                    />
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
                    <input type="submit" className={styles.btnGreen} />

                    <button type="button"
                        className={styles.btnGrey}
                    // onClick={resetHandler}
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