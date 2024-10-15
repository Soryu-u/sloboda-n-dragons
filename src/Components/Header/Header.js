import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    let auth = false;
    function relog () {
        return console.log('Relog');
    }
    return (
        <div className={styles.main}>
            <NavLink to="/compendium" className={styles.link}>
                Бібліотека
            </NavLink>
            <Link to="/public" className={styles.link}>
                Слобода й дракони
            </Link>
            {auth ? 
                <>
                    <Link to="/profile" className={styles.link}>
                        Профіль
                    </Link>
                    <Link to="/public" className={styles.link} onClick={relog}>
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