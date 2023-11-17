import { useState } from 'react';
import styles from './Login.module.css';


const Login = () => {
    const [usernameValue, setUsernameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const usernameChangeHandler = (e) => {
        console.log('targ' + e.target.value);
        setUsernameValue(e.target.value);
        console.log(usernameValue);
    };

    const passwordChangeHandler = (e) => {
        console.log('targ' + e.target.value);
        setPasswordValue(e.target.value);
        console.log(passwordValue);
    };

    const submitHandler=()=>{
        console.log(usernameValue);
        console.log(passwordValue);
        resetHandler();
    };

    const resetHandler=()=>{
        setUsernameValue('');
        setPasswordValue('');

    };


    return (

        <div className={styles.logContainer}>
            <div className="container mt-2 mb-2">

                <h2>Вход</h2>

                <form>
                    <div className="form-group">
                        <label htmlFor="username">Потребител</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            className="form-control"
                            value={usernameValue}
                            onChange={usernameChangeHandler}
                            onBlur={() => console.log('onBlur')}

                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Парола</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="form-control"
                            value={passwordValue}
                            onChange={passwordChangeHandler}

                        />

                    </div>
                    <div className="form-group">
                        <span className={styles.btn}>
                            {/* <input type="submit" className={styles.btnGreen} /> */}
                            <button type="button"
                                className={styles.btnGreen}
                                onClick={submitHandler}
                            >
                                Вход
                            </button>                        

                            <button className={styles.btnOringe}>
                                <a>Регистрация</a>
                            </button>
                            <button type="button"
                                className={styles.btnGrey}
                                onClick={resetHandler}
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