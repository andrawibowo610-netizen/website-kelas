const Auth = (() => {

  const USER = "kelas12-6";
  const PASS = "angkatan2026";
  const KEY = "login";

  function login(username, password){
    if(username === USER && password === PASS){
      localStorage.setItem(KEY,"true");
      window.location.href = "index.html";
    } else {
      alert("Username atau password salah");
    }
  }

  function requireLogin(){
    if(localStorage.getItem(KEY) !== "true"){
      window.location.href = "login.html";
    }
  }

  function logout(){
    localStorage.removeItem(KEY);
    window.location.href = "login.html";
  }

  return {login, requireLogin, logout};

})();
