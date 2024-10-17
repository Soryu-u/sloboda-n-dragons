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
      if (res.data) {
        // Логін користувача після реєстрації
        localStorage.setItem("site", res.token);
        navigate("/home"); // Перенаправлення після реєстрації
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err.message);
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
  
      if (res.data) {
        setUser(res.data.user);
        setToken(res.token);
        localStorage.setItem("site", res.token);
        navigate("/home");
        return { success: true };
      }
  
      // Якщо щось пішло не так, повертаємо повідомлення про помилку
      return { success: false, message: res.message || "Login failed" };
    } catch (err) {
      // Повертаємо повідомлення про помилку при виникненні помилки
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
