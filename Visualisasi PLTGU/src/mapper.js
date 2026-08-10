// ============================================================
// Entry point untuk mapper.html (SVG Polygon Mapper Tool)
// Mengimpor buildingData dari app.js agar mapper bisa
// menampilkan nama bangunan yang sudah ada.
// ============================================================

import { buildingData } from './app.js';

// Expose buildingData ke window agar kode inline mapper.html bisa mengaksesnya
window.buildingData = buildingData;

// Auto-discover semua icon di folder /public/png menggunakan Vite import.meta.glob
const iconFilesGlob = import.meta.glob('../public/png/*.{png,jpg,jpeg,svg,webp}', { eager: false });
window.availableIcons = Object.keys(iconFilesGlob).map(path => path.split('/').pop()).sort();

// Saat DOM siap, sinkronisasi dropdown #iconSelect dengan icon terbaru
document.addEventListener('DOMContentLoaded', () => {
    const iconSelect = document.getElementById('iconSelect');
    if (iconSelect && window.availableIcons && window.availableIcons.length > 0) {
        // Cek apakah opsi di HTML sudah sesuai atau ada icon baru/terubah
        iconSelect.innerHTML = '';
        window.availableIcons.forEach(iconName => {
            const opt = document.createElement('option');
            opt.value = iconName;
            opt.textContent = iconName;
            iconSelect.appendChild(opt);
        });
        
        // Update preview icon ke pilihan pertama atau yang aktif
        const iconPreview = document.getElementById('iconPreview');
        if (iconPreview && iconSelect.value) {
            iconPreview.src = '/png/' + iconSelect.value;
        }
    }
});
