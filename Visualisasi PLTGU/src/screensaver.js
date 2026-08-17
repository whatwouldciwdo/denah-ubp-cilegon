// ============================================================
// screensaver.js — Fitur Video Screensaver untuk Kiosk
// ============================================================

// ---- KONFIGURASI ----
const IDLE_TIMEOUT_MS = 30 * 1000; // 30 detik tanpa aktivitas

const VIDEO_SOURCES = [
    'videos/COMPRO PLTGU 2025 FINAL.mp4',
];

// ---- STATE ----
let idleTimer = null;
let screensaverActive = false;
let isAudioMuted = true; // Default muted agar autoplay selalu diizinkan browser

// ---- DOM ELEMENTS ----
let screensaverOverlay = null;
let screensaverVideo = null;
let screensaverHint = null;
let screensaverAudioBtn = null;
let screensaverVolumeSlider = null;

// ---- INIT ----
function initScreensaver() {
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

        <!-- Control Bar Suara (Mute/Unmute & Volume) -->
        <div id="screensaverAudioControl">
            <button id="screensaverAudioBtn" class="audio-btn muted" title="Aktifkan / Matikan Suara" aria-label="Pengontrol Suara">
                <span class="audio-icon sound-off">🔇</span>
                <span class="audio-icon sound-on" style="display:none;">🔊</span>
                <span class="audio-label">Suara: Muted</span>
            </button>
            <div class="volume-slider-wrapper">
                <input type="range" id="screensaverVolumeSlider" min="0" max="1" step="0.05" value="1" title="Pengatur Volume">
            </div>
        </div>

        <div id="screensaverHint">
            <span class="hint-icon">👆</span>
            <span class="hint-text">Sentuh layar untuk kembali ke peta</span>
        </div>

        <div id="screensaverLogo">
            <img src="logo/Gema Logo.jpeg" alt="GEMA Logo" onerror="this.style.display='none'">
        </div>
    `;

    document.body.appendChild(screensaverOverlay);

    screensaverVideo = document.getElementById('screensaverVideo');
    screensaverHint = document.getElementById('screensaverHint');
    screensaverAudioBtn = document.getElementById('screensaverAudioBtn');
    screensaverVolumeSlider = document.getElementById('screensaverVolumeSlider');

    // Event: saat video selesai → putar ulang (loop)
    screensaverVideo.addEventListener('ended', () => {
        screensaverVideo.currentTime = 0;
        screensaverVideo.play().catch(() => {});
    });

    // Event Mute/Unmute Toggle Button
    const audioControlContainer = document.getElementById('screensaverAudioControl');
    
    // Stop propagation agar klik tombol suara TIDAK menutup screensaver
    audioControlContainer.addEventListener('click', (e) => e.stopPropagation());
    audioControlContainer.addEventListener('touchstart', (e) => e.stopPropagation(), { passive: false });

    screensaverAudioBtn.addEventListener('click', toggleAudio);
    screensaverVolumeSlider.addEventListener('input', handleVolumeChange);

    // Event: klik/sentuh di area luar kontrol → kembali ke peta
    screensaverOverlay.addEventListener('click', deactivateScreensaver);
    screensaverOverlay.addEventListener('touchstart', deactivateScreensaver, { passive: true });

    // Mulai deteksi idle
    resetIdleTimer();
    registerActivityListeners();
}

// ---- KONTROL SUARA ----
function toggleAudio(e) {
    if (e) e.stopPropagation();

    isAudioMuted = !isAudioMuted;
    screensaverVideo.muted = isAudioMuted;

    updateAudioUI();
}

function handleVolumeChange(e) {
    if (e) e.stopPropagation();
    const val = parseFloat(screensaverVolumeSlider.value);
    screensaverVideo.volume = val;

    if (val === 0) {
        screensaverVideo.muted = true;
        isAudioMuted = true;
    } else {
        screensaverVideo.muted = false;
        isAudioMuted = false;
    }

    updateAudioUI();
}

function updateAudioUI() {
    const soundOffIcon = screensaverAudioBtn.querySelector('.sound-off');
    const soundOnIcon = screensaverAudioBtn.querySelector('.sound-on');
    const audioLabel = screensaverAudioBtn.querySelector('.audio-label');

    if (isAudioMuted || screensaverVideo.volume === 0) {
        soundOffIcon.style.display = 'inline-block';
        soundOnIcon.style.display = 'none';
        audioLabel.textContent = 'Suara: Matikan';
        screensaverAudioBtn.classList.add('muted');
        screensaverAudioBtn.classList.remove('unmuted');
    } else {
        soundOffIcon.style.display = 'none';
        soundOnIcon.style.display = 'inline-block';
        audioLabel.textContent = `Suara: ${Math.round(screensaverVideo.volume * 100)}%`;
        screensaverAudioBtn.classList.remove('muted');
        screensaverAudioBtn.classList.add('unmuted');
    }
}

// ---- TIMER ----
function resetIdleTimer() {
    if (screensaverActive) return;
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
    screensaverVideo.muted = isAudioMuted; // Sesuaikan dengan state terkahir

    screensaverVideo.play().catch((err) => {
        console.warn('[Screensaver] Autoplay terblokir atau gagal:', err.message);
        // Fallback ke muted jika unmuted autoplay diblokir browser
        screensaverVideo.muted = true;
        isAudioMuted = true;
        updateAudioUI();
        screensaverVideo.play().catch(() => showVideoError());
    });

    // Tampilkan hint setelah 3 detik
    setTimeout(() => {
        if (screensaverHint) screensaverHint.classList.add('visible');
    }, 3000);
}

// ---- DEAKTIVASI SCREENSAVER ----
function deactivateScreensaver(event) {
    if (!screensaverActive) return;

    if (event) event.stopPropagation();

    screensaverActive = false;

    screensaverOverlay.classList.add('closing');
    screensaverHint.classList.remove('visible');

    setTimeout(() => {
        screensaverOverlay.classList.remove('active', 'closing');
        screensaverOverlay.setAttribute('aria-hidden', 'true');
        screensaverVideo.pause();

        resetIdleTimer();
    }, 600);
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

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScreensaver);
} else {
    initScreensaver();
}

export { activateScreensaver, deactivateScreensaver };
