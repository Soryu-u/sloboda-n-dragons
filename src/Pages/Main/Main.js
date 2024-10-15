import React from "react";
import styles from "./Main.module.css";
import Header from "../../Components/Header/Header";
import { Outlet } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}