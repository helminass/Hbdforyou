function mulai() {
  const judul = document.getElementById("judul");
  const musik = document.getElementById("musik");

  judul.innerText = "Happy Birthday 🎂";

  musik.play();

  ketikTeks();
  setInterval(buatLove, 300);
}

// =======================
// ✍️ Typing Effect
// =======================
const teks = " 💖 Di hari spesial ini, aku berharap dunia memberikan semua kebahagiaan yang layak kamu dapatkan. Semoga setiap impianmu menjadi nyata. Selamat ulang tahun! ✨"
let i = 0;

function ketikTeks() {
  if (i < teks.length) {
    document.getElementById("typing").innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketikTeks, 50);
  } else {
    tampilkanFoto();
  }
}

// =======================
// 🖼️ Tampilkan Foto
// =======================
function tampilkanFoto() {
  const foto = document.getElementById("foto");
  foto.classList.remove("hidden");

  setTimeout(() => {
    foto.classList.add("show");
  }, 100);
}

// =======================
// 💖 Love jatuh
// =======================
function buatLove() {
  const love = document.createElement("div");
  love.classList.add("love");
  love.innerText = "💖";

  love.style.left = Math.random() * 100 + "vw";
  love.style.fontSize = Math.random() * 20 + 10 + "px";

  document.body.appendChild(love);

  setTimeout(() => {
    love.remove();
  }, 5000);
}