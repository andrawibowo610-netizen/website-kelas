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

  function login(username, password, namaDipilih) {
  const user = USERS.find(u =>
    u.username === username &&
    u.password === password &&
    u.nama === namaDipilih
  );

  if (user) {
    localStorage.setItem("kelas_site_logged_in", "true");
    localStorage.setItem("login_nama", user.nama);
    localStorage.setItem("login_absen", user.absen);
    return true;
    return { isLoggedIn, login, requireLogin, logout };
  }
}
      localStorage.setItem("kelas
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
function logout(){
  localstorage.removeItem("kelas_site_logged_in");
  localStorage.removeItem("bgMusicPlaying");
  window.location.href = "login.html";
}
const USER = [
  { username: "kelas12-6", password:"null",nama: "nill", absen: 1 },
  { username: "kelas12-6", password:"null",nama: "nill", absen: 1 },
  { username: "kelas12-6", password:"null",nama: "nill", absen: 1 },
  { username: "kelas12-6", password:"null",nama: "nill", absen: 1 },
    




