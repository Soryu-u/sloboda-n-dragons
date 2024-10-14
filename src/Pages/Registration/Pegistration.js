import React from "react";
import styles from "./Registration.module.css";

export default function Registration() {
    const page = "Зареєструватись";
    function Submit() {
        return console.log("submit")
    };

    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p>Sloboda and Dragons</p>
            </div>
            <div className={styles.container}>
                <p className={styles.header}>Реєстрація</p>
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
                <p className={styles.login}>Вже є обліковий запис? <a>Ввійти</a></p>
            </div>
        </div>
    )
}