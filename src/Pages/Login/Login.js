import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export default function Login() {
    const page = "Вхід";
    const [loginError, setLoginError] = useState(false);
    const [loginErrorMsg, setLoginErrorMsg] = useState("");

    const [input, setInput] = useState({
        username: "",
        password: ""
    });
    
    const auth = useAuth();

    const handleSubmitEvent = async (e) => {
        e.preventDefault();
        if (input.username !== "" && input.password !== "") {
          const result = await auth.loginAction(input);        

          if (!result.success) {
            setLoginError(true);
            
            setLoginErrorMsg(result.message);
            
          } else {
            setLoginError(false);
            setLoginErrorMsg("");
          }
        } else {
          setLoginError(true);
          setLoginErrorMsg("Всі поля мають бути заповнені");
        }
      };

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }
    


    return (
        <div className={styles.main}>
            <Link to="/public" className={styles.head}>
                <div>Sloboda and Dragons</div>
            </Link>
            <div className={styles.container}>
                <p className={styles.header}>Вхід</p>
                <form onSubmit={handleSubmitEvent}>
                    <div className={styles.data_inputs}>
                        <div>
                            <p>Ім'я користувача</p>
                            <input
                                type="text" 
                                name="username" 
                                id="user-username" 
                                onChange={handleInput} 
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input 
                                type="password" 
                                name="password" 
                                id="user-password" 
                                onChange={handleInput} 
                                className={styles.input}
                                aria-describedby="user-password"
                                aria-invalid="false"
                            />
                        </div>
                    </div>
                    {loginError ? <div className={styles.error}>{loginErrorMsg}</div> : <></>}
                    <button className={styles.register_btn} type="submit" title={page}>
                        {page}
                    </button>
                </form>
                <p className={styles.login}>Не маєте облікового запису? <Link to="/registration" className={styles.link}>Зареєструватись</Link></p>
            </div>
        </div>
    )
}