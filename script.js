let current = 0;

const teksAwal = "Aku punya sesuatu buat kamu... Semoga kamu suka...";
let k = 0;

function typingAwal() {
  if (k < teksAwal.length) {
    document.getElementById("teks1").innerHTML += teksAwal.charAt(k);
    k++;
    setTimeout(typingAwal, 50);
  } else {
    // setelah selesai, munculkan tombol
    const btn = document.getElementById("btn1");
    btn.classList.remove("hidden");

    setTimeout(() => {
      btn.classList.add("show");
    }, 100);
  }
}

// pindah scene
function nextScene() {
  current++;
  document.getElementById("app").style.transform =
    "translateX(-" + current * 100 + "vw)";

  if (current === 1) typingScene2();
  if (current === 2) mulaiScene3();
}

function startApp() {
  const musik = document.getElementById("musik");
  musik.volume = 0;

  musik.play();

  // fade in
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 1) {
      vol += 0.05;
      musik.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 200);

  playKlik();
  nextScene();
}

// 🔊 klik sound
function playKlik() {
  document.getElementById("klikSound").play();
}

// 🎬 scene 2 typing
const teks2 = "Cieee yang bertambah usia, maaf misalnya kurang aesthetic wkwk";
let j = 0;

function typingScene2() {
  if (j < teks2.length) {
    document.getElementById("scene2Text").innerHTML += teks2.charAt(j);
    j++;
    setTimeout(typingScene2, 120);
  } else {
    setTimeout(nextScene, 1500);
  }
}

// 🎬 scene 3 mulai
function mulaiScene3() {
  setInterval(buatBalon, 500);
  setTimeout(ketik, 1000);
}

// ✍️ typing utama
const teks = "Selamat ulang tahun ya 💖 Semoga semua impianmu tercapai ✨";
let i = 0;

function ketik() {
  if (i < teks.length) {
    document.getElementById("typing").innerHTML += teks.charAt(i);
    i++;
    setTimeout(ketik, 80);
  } else {
    setTimeout(() => {
      document.getElementById("foto").classList.add("show");
      setInterval(kembangApi, 500);
    }, 1000);
  }
}

// 💌 surat
function bukaSurat() {
  document.getElementById("surat").classList.add("show");
}

// 🎈 balon
function buatBalon() {
  const warna = ["red", "blue", "yellow", "pink", "purple"];

  const balon = document.createElement("div");
  balon.innerText = "🎈";
  balon.style.color = warna[Math.floor(Math.random() * warna.length)];
  balon.classList.add("balon");

  balon.style.left = Math.random() * 100 + "vw";
  balon.style.animationDuration = (4 + Math.random() * 3) + "s";

  document.body.appendChild(balon);

  setTimeout(() => balon.remove(), 7000);
}

// 🎆 kembang api
function kembangApi() {
  const warna = ["red", "yellow", "blue", "pink", "cyan"];

  for (let i = 0; i < 20; i++) {
    const api = document.createElement("div");
    api.classList.add("api");

    api.style.background =
      warna[Math.floor(Math.random() * warna.length)];

    api.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(api);

    setTimeout(() => api.remove(), 1000);
  }
}

window.onload = typingAwal;
