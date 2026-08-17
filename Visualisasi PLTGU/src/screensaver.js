// ============================================================
// screensaver.js — Fitur Video Screensaver untuk Kiosk
// ============================================================
// Cara kerja:
//   - Jika tidak ada aktivitas (touch/klik/mouse/keyboard) selama
//     IDLE_TIMEOUT detik, overlay video muncul dan video diputar.
//   - Saat ada sentuhan/klik di overlay, video dihentikan dan
//     pengguna kembali ke peta interaktif.
//
// KONFIGURASI PATH VIDEO:
//   Karena file video (~650 MB) disimpan LOKAL di masing-masing
//   kiosk (bukan di server/GitHub), path VIDEO_SOURCES harus
//   disesuaikan dengan lokasi file di komputer kiosk tersebut.
//
//   Contoh path:
//     Windows:  'file:///C:/Videos/COMPRO PLTGU 2025 FINAL.mp4'
//     Relatif:  'videos/COMPRO PLTGU 2025 FINAL.mp4'  (jika ada di public/videos/)
// ============================================================

// ---- KONFIGURASI ----
const IDLE_TIMEOUT_MS = 30 * 1000; // 30 detik tanpa aktivitas

// Path video — ubah sesuai lokasi file di kiosk
// Gunakan path relatif jika file ada di folder public/videos/
// Gunakan path absolut (file:///) jika file ada di tempat lain di Windows
const VIDEO_SOURCES = [
    'videos/COMPRO PLTGU 2025 FINAL.mp4',
    // Tambahkan fallback path jika perlu:
    // 'file:///C:/Videos/COMPRO PLTGU 2025 FINAL.mp4',
];

// ---- STATE ----
let idleTimer = null;
let screensaverActive = false;

// ---- DOM ELEMENTS ----
let screensaverOverlay = null;
let screensaverVideo = null;
let screensaverHint = null;

// ---- INIT ----
function initScreensaver() {
    // Buat overlay screensaver
    screensaverOverlay = document.createElement('div');
    screensaverOverlay.id = 'screensaverOverlay';
    screensaverOverlay.setAttribute('aria-hidden', 'true');
    screensaverOverlay.innerHTML = `
        <video id="screensaverVideo" 
               playsinline 
               muted 
               preload="metadata"
               style="display:block;">
            ${VIDEO_SOURCES.map(src => `<source src="${src}" type="video/mp4">`).join('\n            ')}
            Browser tidak mendukung video.
        </video>
        <div id="screensaverHint">
            <span class="hint-icon">👆</span>
            <span class="hint-text">Sentuh layar untuk kembali ke peta</span>
        </div>
        <div id="screensaverLogo">
            <img src="logo/Gema Logo.jpeg" alt="GEMA Logo" onerror="this.style.display='none'">
        </div>
    `;

    document.body.appendChild(screensaverOverlay);

    // Ambil referensi elemen video setelah ditambahkan ke DOM
    screensaverVideo = document.getElementById('screensaverVideo');
    screensaverHint = document.getElementById('screensaverHint');

    // Event: saat video selesai → putar ulang (loop)
    screensaverVideo.addEventListener('ended', () => {
        screensaverVideo.currentTime = 0;
        screensaverVideo.play().catch(() => {});
    });

    // Event: klik/sentuh di overlay screensaver → kembali ke peta
    screensaverOverlay.addEventListener('click', deactivateScreensaver);
    screensaverOverlay.addEventListener('touchstart', deactivateScreensaver, { passive: true });

    // Mulai deteksi idle
    resetIdleTimer();
    registerActivityListeners();
}

// ---- TIMER ----
function resetIdleTimer() {
    if (screensaverActive) return; // Jangan reset saat screensaver aktif
    clearTimeout(idleTimer);
    idleTimer = setTimeout(activateScreensaver, IDLE_TIMEOUT_MS);
}

// ---- AKTIVASI SCREENSAVER ----
function activateScreensaver() {
    if (screensaverActive) return;
    screensaverActive = true;

    screensaverOverlay.classList.add('active');
    screensaverOverlay.setAttribute('aria-hidden', 'false');

    // Mulai dari awal dan putar
    screensaverVideo.currentTime = 0;
    screensaverVideo.play().catch((err) => {
        console.warn('[Screensaver] Gagal memutar video:', err.message);
        // Tampilkan pesan error ringan jika video tidak tersedia
        showVideoError();
    });

    // Tampilkan hint setelah 3 detik
    setTimeout(() => {
        if (screensaverHint) screensaverHint.classList.add('visible');
    }, 3000);

    console.log('[Screensaver] Aktif — menampilkan video kompro.');
}

// ---- DEAKTIVASI SCREENSAVER ----
function deactivateScreensaver(event) {
    if (!screensaverActive) return;

    // Cegah event menyebar ke peta (agar tidak memicu klik bangunan)
    if (event) event.stopPropagation();

    screensaverActive = false;

    // Animasi fade-out
    screensaverOverlay.classList.add('closing');
    screensaverHint.classList.remove('visible');

    setTimeout(() => {
        screensaverOverlay.classList.remove('active', 'closing');
        screensaverOverlay.setAttribute('aria-hidden', 'true');
        screensaverVideo.pause();

        // Reset idle timer
        resetIdleTimer();
    }, 600); // Durasi sama dengan transisi CSS

    console.log('[Screensaver] Nonaktif — kembali ke peta.');
}

// ---- DETEKSI AKTIVITAS USER ----
function registerActivityListeners() {
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel', 'scroll', 'click'];
    events.forEach(eventType => {
        document.addEventListener(eventType, onUserActivity, { passive: true, capture: true });
    });
}

function onUserActivity() {
    if (!screensaverActive) {
        resetIdleTimer();
    }
}

// ---- ERROR HANDLING ----
function showVideoError() {
    const errorMsg = document.createElement('div');
    errorMsg.id = 'screensaverError';
    errorMsg.innerHTML = `
        <div style="text-align:center; color:rgba(255,255,255,0.7);">
            <div style="font-size:3rem; margin-bottom:1rem;">🎬</div>
            <p style="font-size:1.2rem; margin:0;">Video Profil PLTGU Cilegon</p>
            <p style="font-size:0.85rem; margin-top:0.5rem; opacity:0.6;">
                File video tidak ditemukan.<br>
                Pastikan file ada di folder <code>public/videos/</code>
            </p>
        </div>
    `;
    screensaverOverlay.appendChild(errorMsg);
}

// ---- EKSPOR & AUTO-INIT ----
// Inisialisasi setelah DOM siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScreensaver);
} else {
    initScreensaver();
}

export { activateScreensaver, deactivateScreensaver };
