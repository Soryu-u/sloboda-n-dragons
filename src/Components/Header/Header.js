import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export default function Header() {
    const auth = useAuth();
    return (
        <div className={styles.main}>
            <NavLink to="/compendium" className={styles.link}>
                Бібліотека
            </NavLink>
            <Link to={auth.token ? "/home" : "/public"}className={styles.link}>
                Слобода й дракони
            </Link>
            {auth.token ? 
                <>                    
                    <Link to="/public" className={styles.link}>
                        Новини
                    </Link>
                    <Link to="/profile" className={styles.link}>
                        Профіль
                    </Link>
                    <Link to="/public" className={styles.link} onClick={() => auth.logOut()}>
                        Вийти
                    </Link>
                </> : 
                <>
                    <Link to="/registration" className={styles.link}>
                        Реєстрація
                    </Link>
                    <Link to="/login" className={styles.link}>
                        Вхід
                    </Link>
                </>
            }

        </div>
    );
}