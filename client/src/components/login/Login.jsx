import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Login.module.css';

import useForm from '../../hooks/useForm.js';
import AuthContext from '../../contexts/authContex.js';


const LoginFormKeys = {
    Email: 'email',
    Password: 'password',
};

const Login = () => {

    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit, onReset } = useForm(loginSubmitHandler, {        

        [LoginFormKeys.Email]: '',
        [LoginFormKeys.Password]: '',

    });


    return (

        <div className={styles.logContainer}>
            <div className="container mt-2 mb-2">
                <h2>Вход</h2>

                <form onSubmit={onSubmit}>

                    <div className="form-group" >
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name={LoginFormKeys.Email}
                            className="form-control"
                            placeholder="sokka@abv.bg"
                            value={values[LoginFormKeys.Email]}
                            onChange={onChange}
                            onBlur={() => console.log('onBlur')}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Парола</label>
                        <input
                            type="password"
                            id="password"
                            name={LoginFormKeys.Password}
                            className="form-control"
                            value={values[LoginFormKeys.Password]}
                            onChange={onChange}
                        />

                    </div>
                    <div className="form-group">
                        <span className={styles.btn}>                            
                            <input
                                type="submit"
                                className={styles.btnGreen}
                                value='Вход'
                            />

                            <button className={styles.btnOringe} >
                                <Link to="/register" style={{color:'white'}}>Регистрация</Link>
                            </button>
                            <button type="button"
                                className={styles.btnGrey}                                
                                onClick={onReset}
                            >
                                Изчисти
                            </button>
                        </span>
                    </div>
                </form>

            </div>
        </div>


    );
};
export default Login;