document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("bgMusic");
  const menu = document.getElementById("musicMenu");
  const toggleBtn = document.getElementById("musicToggle");
  const pauseBtn = document.getElementById("pauseBtn");

  if (!audio) {
    console.error("Audio element tidak ditemukan");
    return;
  }

  toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  document.querySelectorAll("[data-music]").forEach(item => {
    item.addEventListener("click", () => {
      const src = item.getAttribute("data-music");
      audio.src = src;
      audio.play()
        .then(() => {
          localStorage.setItem("bgMusic", src);
        })
        .catch(err => {
          console.warn("Autoplay diblokir browser:", err);
        });
    });
  });

  pauseBtn.addEventListener("click", () => {
    audio.pause();
  });

  // play lagu terakhir (setelah user pernah klik)
  const lastMusic = localStorage.getItem("bgMusic");
  if (lastMusic) {
    audio.src = lastMusic;
  }
});
