import React from "react";
import styles from "./Header.module.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    let logged = false;
    return (
        <div className={styles.main}>
            <NavLink to="/compendium" className={styles.link}>
                Бібліотека
            </NavLink>
            <Link to="/public" className={styles.link}>
                Слобода й дракони
            </Link>
            <Link to="/registration" className={styles.link}>
                Реєстрація
            </Link>
            <Link to="/login" className={styles.link}>
                Вхід
            </Link>
        </div>
    );
}