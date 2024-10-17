import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();

  const registerAction = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const res = await response.json();
      
      if (res.success) {
        // Логін користувача після реєстрації
        localStorage.setItem("site", res.token);
        setToken(res.token);
        setUser(res.user);
        navigate("/home"); // Перенаправлення після реєстрації
        return { success: true, user: res.user };
      }
      throw new Error(res.message);
    } catch (err) {
      return { success: false, message: err.message || "Login failed" };
    }
  };

  const loginAction = async (data) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const res = await response.json();
          

      // Перевіряємо, чи є користувач і токен у відповіді
      if (res.success && res.token) {
        setUser(res.user);
        setToken(res.token);
  
        // Зберігаємо токен в localStorage
        localStorage.setItem("site", res.token);
  
        // Переходимо на сторінку home
        navigate("/home");
  
        return res;
      }
  
      // Якщо щось пішло не так, повертаємо повідомлення про помилку
      return { success: false, message: res.message || "Login failed" };
    } catch (err) {
      // Повертаємо повідомлення про помилку при виникненні помилки
      console.error(err.message);
      return { success: false, message: err.message || "An error occurred" };
    }
  };
  
  
  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    navigate("/public");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, registerAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
