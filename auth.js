// auth.js
// NOTE: Ini hanya proteksi tampilan (bukan security beneran) karena static website.

const Auth = (() => {
  // ✅ GANTI SESUAI MAU LO:
  const USERNAME = "kelas12-6";
  const PASSWORD = "angkatan2026";

  const KEY = "kelas_site_logged_in";

  function isLoggedIn() {
    return localStorage.getItem(KEY) === "true";
  }

  function login(username, password) {
    const ok = username === USERNAME && password === PASSWORD;
    if (ok) localStorage.setItem(KEY, "true");
    return ok;
  }

  function requireLogin() {
    if (!isLoggedIn()) {
      // simpan halaman terakhir biar setelah login bisa balik
      localStorage.setItem("redirect_after_login", window.location.pathname.split("/").pop());
      window.location.href = "login.html";
    }
  }

  function logout() {
    localStorage.removeItem(KEY);
    window.location.href = "login.html";
  }

  function goBackAfterLogin(defaultPage = "index.html") {
    const target = localStorage.getItem("redirect_after_login") || defaultPage;
    localStorage.removeItem("redirect_after_login");
    window.location.href = target;
  }

  return { isLoggedIn, login, requireLogin, logout, goBackAfterLogin };
})();
