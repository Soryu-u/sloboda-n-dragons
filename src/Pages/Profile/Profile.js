import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import { getProfile, changePassword } from "../../providers/ProfileProvider";
import { useAuth } from "../../providers/AuthProvider";
import { Navigate } from "react-router-dom";

export default function Profile () {
    const [profile, setProfile] = useState({ username: "", email: "" });
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [profileError, setProfileError] = useState("");
    const [loading, setLoading] = useState(true);
    const user = useAuth();

    // Отримуємо токен з LocalStorage
  const token = localStorage.getItem("site");

  // Функція для отримання даних профілю
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);        
      } catch (err) {
        setProfileError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [token]);

  // Функція для зміни пароля
  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const message = await changePassword(token, currentPassword, newPassword);
      setPasswordMessage(message);
    } catch (err) {
      setPasswordMessage(err.message);
    }
  };

  if (!user.token) return (
      <Navigate to="/login" />
  );

  if (loading) {
    return <p>Завантаження...</p>;
  }
  

    return (
<div>
      <h2>Профіль</h2>
      {profileError && <p style={{ color: "red" }}>{profileError}</p>}
      <p>Ім'я профілю: {profile.username}</p>
      <p>Email: {profile.email}</p>

      <h3>Змінити пароль</h3>
      <form onSubmit={handleChangePassword}>
        <input
          type="password"
          placeholder="Поточний пароль"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Новий пароль"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Змінити пароль</button>
      </form>
      {passwordMessage && <p>{passwordMessage}</p>}
    </div>
    );
}