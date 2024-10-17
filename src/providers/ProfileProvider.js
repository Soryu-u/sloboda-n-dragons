// ProfileProvider.js
export const getProfile = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/auth/profile", {
        headers: {
          Authorization: token, // Передаємо токен для аутентифікації
        },
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error fetching profile");
      }
      return data;
    } catch (err) {
      console.error(err.message);
      throw err; // Повертаємо помилку, щоб обробити її в компоненті
    }
  };
  
  export const changePassword = async (token, currentPassword, newPassword) => {
    try {
      const response = await fetch("http://localhost:5000/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token, // Передаємо токен для аутентифікації
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error changing password");
      }
      return data.message;
    } catch (err) {
      console.error(err.message);
      throw err; // Повертаємо помилку для обробки в компоненті
    }
  };

  