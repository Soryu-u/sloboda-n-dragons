import React from "react";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <div className={styles.main}>
            <ul>
                <li>
                    Персонажі
                </li>
                <li>
                    До гри
                </li>
            </ul>
        </div>
    )
}