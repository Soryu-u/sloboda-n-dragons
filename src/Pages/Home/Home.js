import React from "react";
import styles from "./Home.module.css";
import { useAuth } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Home() {  
  const user = useAuth();

  if (!user.token) return (
    <Navigate to="/login" />
);
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