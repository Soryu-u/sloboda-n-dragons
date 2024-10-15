import React from "react";
import styles from "./Login.module.css";
import { Link, useNavigate  } from "react-router-dom";

export default function Login() {
    const page = "Вхід";
    const navigate = useNavigate ();
    function Submit() {
        navigate(`/home`);
        return console.log("submit")
    };

    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p>Sloboda and Dragons</p>
            </div>
            <div className={styles.container}>
                <p className={styles.header}>Вхід</p>
                <div>
                    <div className={styles.data_inputs}>
                        <div>
                            <p>Ім'я користувача</p>
                            <input className={styles.input}/>
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input className={styles.input}/>
                        </div>
                    </div>
                    <button className={styles.register_btn} type="submit" title={page} onClick={Submit}>
                        {page}
                    </button>
                </div>
                <p className={styles.login}>Не маєте облікового запису? <Link to="/registration" className={styles.link}>Зареєструватись</Link></p>
            </div>
        </div>
    )
}