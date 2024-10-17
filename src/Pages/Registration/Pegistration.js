import React, { useState } from "react";
import styles from "./Registration.module.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export default function Registration() {
    const page = "Зареєструватись";
    const [registerError, setRegisterError] = useState(true);
    const [registerErrorMsg, setRegisterErrorMsg] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
      });
   
    const auth = useAuth();
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await auth.registerAction(formData);
        
        setRegisterErrorMsg(result.message);
        setRegisterError(result.success);
    };

    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p>Sloboda and Dragons</p>
            </div>
            <div className={styles.container}>
                <p className={styles.header}>Реєстрація</p>
                <form onSubmit={handleSubmit}>
                    <div className={styles.data_inputs}>
                        <div>
                            <p>Ім'я користувача</p>
                            <input
                                type="text" 
                                name="username" 
                                id="user-username" 
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>
                        <div>
                            <p>E-mail</p>
                            <input
                                type="email" 
                                name="email" 
                                id="user-email" 
                                onChange={handleChange}
                                className={styles.input}
                                aria-describedby="user-email"
                                aria-invalid="false"
                            />
                        </div>
                        <div>
                            <p>Пароль</p>
                            <input 
                                type="password" 
                                name="password" 
                                id="user-password" 
                                onChange={handleChange}
                                className={styles.input}
                                aria-describedby="user-password"
                                aria-invalid="false"
                            />
                        </div>
                    </div>
                    {!registerError ? <div className={styles.error}>{registerErrorMsg}</div> : <></>}
                    <button className={styles.register_btn} type="submit" title={page}>
                        {page}
                    </button>
                </form>
                <p className={styles.login}>Вже є обліковий запис? <Link to="/login" className={styles.link}>Ввійти</Link></p>
            </div>
        </div>
    )
}