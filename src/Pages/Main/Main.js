import React from "react";
import styles from "./Main.module.css";
import Header from "../../Components/Header/Header";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

export default function Main() {
  return (
    <div>
        <Header/>
        <Outlet/>
    </div>
);
}