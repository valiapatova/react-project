import styles from'./Login.module.css';

const Login = () => {
    return (
      
        <div className="container mt-2 mb-2">
            <h2>Вход</h2>

                 <form>
                    <div className="form-group">
                        <label htmlFor="userName">Потребител</label>
                        <input type="text" name="userName" id="userName" className="form-control" />
                        {/* <span asp-validation-for="Username" class="text-danger"></span> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Парола</label>
                        <input type="password" name="password" id="password" className="form-control" />
                        {/* <span asp-validation-for="Password" class="text-danger"></span> */}
                    </div>
                    <div className="form-group">
                        <span className ={styles.btn}>
                        <input type="submit"  className={styles.btnGreen} />
                        
                        {/* <a class="btn btn-success">Вход</a> */}
                        <button className={styles.btnGrey}>
                            <a>Регистрация</a>
                        </button>
                        </span>
                    </div>
                </form>

            </div>

       

    );
};
export default Login;