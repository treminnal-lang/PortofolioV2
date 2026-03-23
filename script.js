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