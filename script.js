function filterSkill(kategori) {
  // Ambil semua elemen dengan class 'box'
  const semuaBox = document.querySelectorAll('.box');

  semuaBox.forEach(box => {
    // Sesuaikan dengan nama class di HTML lo: Skill-GraphicDesign, dll.
    const targetClass = 'Skill-' + kategori;

    if (box.classList.contains(targetClass)) {
      // Pakai !important di JS buat menangin adu mekanik lawan CSS display: none
      box.style.setProperty('display', 'block', 'important');
    } else {
      box.style.setProperty('display', 'none', 'important');
    }
  });
}

// Pastikan fungsi jalan saat pertama kali web dibuka
window.addEventListener('DOMContentLoaded', () => {
  filterSkill('GraphicDesign');
});





const txtElement = document.getElementById('typing-wisenx');
const words = ['v2.0']; // Lo bisa ganti kata-katanya di sini
let wordIndex = 0;
let txt = '';
let isDeleting = false;

function type() {
  const current = wordIndex % words.length;
  const fullTxt = words[current];

  // Cek mode hapus atau ngetik
  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }

  // Masukkan ke HTML
  txtElement.innerHTML = txt;

  // Atur kecepatan
  let typeSpeed = 200; // Kecepatan ngetik

  if (isDeleting) {
    typeSpeed /= 2; // Hapus lebih cepet (100ms)
  }

  // Logika balik arah
  if (!isDeleting && txt === fullTxt) {
    typeSpeed = 3000; // Diem 2.5 detik pas teks lengkap
    isDeleting = true;
  } else if (isDeleting && txt === '') {
    isDeleting = false;
    wordIndex++;
    typeSpeed = 500; // Jeda sebelum ngetik kata baru
  }

  setTimeout(() => type(), typeSpeed);
}

// Jalankan pas web kebuka
document.addEventListener('DOMContentLoaded', type);
