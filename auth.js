// auth.js
const Auth = (() => {
  const LOGIN_KEY = "kelas_logged_in";
  const USER_KEY = "kelas_user_data";

  function login(username, password) {
    const user = USERS.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      localStorage.setItem(LOGIN_KEY, "true");
      localStorage.setItem(USER_KEY, JSON.stringify(user));
      return true;
    }
    return false;
  }

  function isLoggedIn() {
    return localStorage.getItem(LOGIN_KEY) === "true";
  }

  function getUser() {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  }

  function requireLogin() {
    if (!isLoggedIn()) {
      window.location.href = "login.html";
    }
  }

  function logout() {
    localStorage.removeItem(LOGIN_KEY);
    localStorage.removeItem(USER_KEY);
    window.location.href = "login.html";
  }

  return { login, isLoggedIn, getUser, requireLogin, logout };
})();
