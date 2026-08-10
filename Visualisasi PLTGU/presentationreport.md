# Laporan Cara Kerja Sistem — Denah Interaktif PLTGU Cilegon

> **Dokumen ini menjelaskan secara eksplisit bagaimana setiap fitur bekerja, beserta lokasi kode yang menjalankannya.**

---

## Daftar Isi

1. [Arsitektur Sistem](#1-arsitektur-sistem)
2. [Struktur File Proyek](#2-struktur-file-proyek)
3. [Alur Build & Development](#3-alur-build--development)
4. [Entry Point Aplikasi](#4-entry-point-aplikasi)
5. [Data Bangunan (buildingData)](#5-data-bangunan-buildingdata)
6. [Peta Interaktif — SVG Overlay](#6-peta-interaktif--svg-overlay)
7. [Fitur: Toggle Satelit vs Vektor](#7-fitur-toggle-satelit-vs-vektor)
8. [Fitur: Tooltip Hover Bangunan](#8-fitur-tooltip-hover-bangunan)
9. [Fitur: Popover Card (Klik Bangunan)](#9-fitur-popover-card-klik-bangunan)
10. [Fitur: Modal Detail Bangunan](#10-fitur-modal-detail-bangunan)
11. [Fitur: Galeri Foto Multi-Lantai](#11-fitur-galeri-foto-multi-lantai)
12. [Fitur: Lightbox (Zoom Foto)](#12-fitur-lightbox-zoom-foto)
13. [Fitur: Daftar Bangunan (Panel di Peta)](#13-fitur-daftar-bangunan-panel-di-peta)
14. [Fitur: Side Navbar Drawer](#14-fitur-side-navbar-drawer)
15. [Fitur: Jam Digital WIB](#15-fitur-jam-digital-wib)
16. [Sistem Auto-Load Gambar](#16-sistem-auto-load-gambar)
17. [Mapper Tool](#17-mapper-tool)
18. [Styling & Tema Gelap](#18-styling--tema-gelap)
19. [Aksesibilitas Keyboard](#19-aksesibilitas-keyboard)
20. [Diagram Alur Interaksi Pengguna](#20-diagram-alur-interaksi-pengguna)
21. [Ringkasan Fungsi & Lokasi Kode](#21-ringkasan-fungsi--lokasi-kode)

---

## 1. Arsitektur Sistem

Sistem ini adalah **Multi-Page Application (MPA)** berbasis **Vite** yang terdiri dari dua halaman:

| Halaman | File | Fungsi |
|---|---|---|
| Denah Interaktif | `index.html` | Halaman utama untuk pengguna akhir |
| Mapper Tool | `mapper.html` | Alat developer untuk menggambar/mengedit polygon |

**Teknologi:**
- **Vite** — build tool (bundler) dan dev server
- **Vanilla HTML + CSS + JavaScript** — tidak ada framework React/Vue
- **SVG** — untuk menggambar area klik bangunan di atas peta
- **Docker + Nginx** — untuk deployment ke server

---

## 2. Struktur File Proyek

```
Visualisasi PLTGU/
├── index.html          <- Halaman utama (denah interaktif)
├── mapper.html         <- Alat developer (gambar polygon bangunan)
├── vite.config.js      <- Konfigurasi Vite (multi-page, port, publicDir)
├── package.json        <- Dependensi & scripts (npm run dev / build)
├── Dockerfile          <- Containerisasi dengan Nginx
├── docker-compose.yml  <- Orkestrasi Docker
├── nginx.conf          <- Konfigurasi web server Nginx
│
├── src/
│   ├── main.js         <- Entry point index.html (import CSS + app.js)
│   ├── app.js          <- SEMUA logic aplikasi + data bangunan (1267 baris)
│   ├── mapper.js       <- Entry point mapper.html
│   └── style.css       <- Semua styling (1373 baris)
│
├── public/
│   └── buildings/      <- Folder foto-foto bangunan (auto-detected)
│       ├── b1(Distillate Oil Tank)/thumb.jpg
│       ├── b20(Area HRSG)/Lt Dasar/1.jpg
│       └── ...
│
├── png/                <- Icon PNG bangunan (untuk SVG overlay)
│   ├── 002-industry.png
│   └── ...
│
├── denah satelit.jpg   <- Gambar peta satelit (base map)
├── denah vector.svg    <- Gambar peta vektor (base map)
└── dist/               <- Output build Vite (siap deploy)
```

---

## 3. Alur Build & Development

### Development (lokal)
```bash
npm run dev
```
Menjalankan **Vite dev server** di `http://localhost:3000`.
Konfigurasi ada di **`vite.config.js` baris 5-8**:
```js
server: {
    port: 3000,
    host: true,   // bisa diakses dari jaringan lokal
},
```

### Build Production
```bash
npm run build
```
Vite mengkompilasi semua file ke folder `dist/`.
Konfigurasi multi-page ada di **`vite.config.js` baris 13-19**:
```js
build: {
    rollupOptions: {
        input: {
            main: resolve(__dirname, 'index.html'),     // halaman utama
            mapper: resolve(__dirname, 'mapper.html'),  // mapper tool
        },
    },
},
```

### Preview Production
```bash
npm run preview
```
Menjalankan preview build hasil `dist/` secara lokal.

---

## 4. Entry Point Aplikasi

### index.html -> src/main.js
File `index.html` **baris 1114** memuat JavaScript:
```html
<script type="module" src="/src/main.js"></script>
```

File **`src/main.js`** (10 baris) mengimpor CSS dan logic utama:
```js
import './style.css';  // Semua styling
import './app.js';     // Semua logic aplikasi
```

### mapper.html -> src/mapper.js
File **`src/mapper.js`** mengimpor `buildingData` dari `app.js`:
```js
import { buildingData } from './app.js';
window.buildingData = buildingData;  // expose ke global scope
```

---

## 5. Data Bangunan (buildingData)

**File:** `src/app.js` — **baris 1 sampai 606**

Semua data 46 bangunan disimpan sebagai satu objek JavaScript besar bernama `buildingData`:
```js
export const buildingData = {
    "b1": {
        number: "b1",
        name: "Distillate Oil Tank",
        zona: "A",           // Zona area (A, B, C, atau D)
        dimensi: "± 5.320 m²",
        shortDesc: "...",    // Deskripsi singkat — ditampilkan di POPOVER
        description: "...", // Deskripsi lengkap — ditampilkan di MODAL
        fungsi: [            // Array fungsi — ditampilkan di modal sebagai list
            "Menyimpan bahan bakar cadangan HSD",
            "Menyediakan bahan bakar saat start-up gas turbin",
        ]
    },
    "b2": { ... },
    // ... hingga b46
};
```

**Cara kerja:** Ketika JavaScript perlu menampilkan info bangunan `b20`, cukup akses `buildingData["b20"]`.

---

## 6. Peta Interaktif — SVG Overlay

**File:** `index.html` — **baris 159-619** (Satelit) dan **baris 623-1037** (Vektor)

Peta menggunakan **dua lapisan (layer)**:
1. **Base Map (gambar)** — gambar satelit/vektor sebagai latar belakang
2. **SVG Overlay** — layer transparan berisi polygon yang bisa diklik

### Cara setiap bangunan didefinisikan di SVG

Setiap bangunan dibungkus dalam elemen `<g>` dengan atribut:
- `data-building-id="b1"` — menghubungkan polygon ke data di `buildingData`
- `class="building-polygon"` — class yang di-attach event listener JavaScript
- `role="button"` dan `tabindex="0"` — untuk aksesibilitas keyboard

**Contoh (index.html baris 163-167):**
```html
<g data-building-id="b1" class="building-polygon" role="button" tabindex="0" aria-label="b1">
    <polygon points="5431,3281 5424,3271 ... 5431,4069" />
    <image href="/png/010-oil-tank-2.png" x="5712" y="3506" width="300" height="300"
        class="building-icon" />
</g>
```

`points` = koordinat pixel SVG yang menentukan bentuk area klik bangunan.
`<image>` = icon PNG dekoratif (tidak bisa diklik, `pointer-events:none` di CSS).

### Dua sistem koordinat berbeda

| Overlay | viewBox | Digunakan untuk |
|---|---|---|
| `mapOverlaySatelit` | `0 0 8192 4320` | Gambar satelit beresolusi tinggi |
| `mapOverlayVektor` | `0 0 2752 1536` | Gambar vektor SVG |

---

## 7. Fitur: Toggle Satelit vs Vektor

**File:** `src/app.js` — **baris 636-688**

**HTML trigger (index.html baris 132-152):**
```html
<div class="map-view-toggle" id="mapViewToggle">
    <button id="btnSatelit">Satelit</button>
    <button id="btnVektor">Vektor</button>
</div>
```

**Fungsi switchMapView (app.js baris 648-684):**
```js
function switchMapView(view) {
    if (view === 'satelit') {
        // 1. Aktifkan tombol Satelit
        btnSatelit.classList.add('active');
        btnVektor.classList.remove('active');
        // 2. Tampilkan base map satelit dengan animasi fade
        baseMapSatelit.style.display = '';
        baseMapSatelit.classList.add('active');
        baseMapVektor.classList.remove('active');
        // 3. Tampilkan SVG overlay satelit, sembunyikan overlay vektor
        overlaySatelit.style.display = '';
        overlayVektor.style.display = 'none';
    } else {
        // ... kebalikan untuk vektor
    }
}

// app.js baris 686-687 — Pasang event listener ke tombol
btnSatelit.addEventListener('click', () => switchMapView('satelit'));
btnVektor.addEventListener('click', () => switchMapView('vektor'));
```

**Efek transisi fade** dikerjakan oleh CSS (`style.css`):
```css
.base-map { transition: opacity 0.4s ease; }
.base-map:not(.active) { opacity: 0; pointer-events: none; }
```

---

## 8. Fitur: Tooltip Hover Bangunan

**File:** `src/app.js` — **baris 713-739**

Tooltip = teks kecil yang muncul di dekat kursor saat mouse melayang di atas bangunan.

**HTML (index.html):**
```html
<div id="tooltip" class="map-tooltip"></div>
```

**Cara kerja — 3 event listener untuk SETIAP bangunan:**
```js
// app.js baris 724-739

// 1. saat mouse MASUK ke bangunan
building.addEventListener('mouseenter', function () {
    const data = buildingData[this.getAttribute('data-building-id')];
    if (data) {
        tooltip.textContent = data.name;   // isi text nama bangunan
        tooltip.classList.add('visible'); // CSS: opacity 1 -> tooltip tampil
    }
});

// 2. saat mouse BERGERAK di atas bangunan -> update posisi tooltip
building.addEventListener('mousemove', function (e) {
    tooltip.style.left = (e.clientX + 16) + 'px'; // 16px di kanan kursor
    tooltip.style.top  = (e.clientY - 12) + 'px'; // 12px di atas kursor
});

// 3. saat mouse KELUAR dari bangunan -> sembunyikan tooltip
building.addEventListener('mouseleave', function () {
    tooltip.classList.remove('visible'); // CSS: opacity 0 -> tooltip hilang
});
```

---

## 9. Fitur: Popover Card (Klik Bangunan)

**File:** `src/app.js` — **baris 714-840**

Popover = kartu kecil berisi foto thumbnail, nama, deskripsi singkat, dan tombol "Lihat Detail".

**HTML (index.html):**
```html
<div id="popoverCard" class="popover-card">
    <img id="popoverImage" ...>
    <div class="popover-body">
        <h3 id="popoverTitle"></h3>
        <p id="popoverDesc"></p>
        <button id="btnDetail">Lihat Detail</button>
    </div>
    <button id="popoverClose">x</button>
</div>
```

**Event listener klik (app.js baris 716-721):**
```js
building.addEventListener('click', function (e) {
    e.stopPropagation(); // cegah event naik ke document
    const buildingId = this.getAttribute('data-building-id');
    openPopover(buildingId, e.clientX, e.clientY); // buka di posisi kursor
    tooltip.classList.remove('visible');           // sembunyikan tooltip
});
```

**Fungsi openPopover (app.js baris 754-821) — langkah per langkah:**
```js
function openPopover(buildingId, x, y) {
    const data = buildingData[buildingId];  // ambil data dari buildingData
    if (!data) return;

    currentBuildingId = buildingId;        // simpan ID untuk tombol "Detail"
    popoverTitle.textContent = data.name;  // isi judul kartu

    // Highlight (nyalakan glow) polygon bangunan di peta
    document.querySelectorAll('.building-polygon.active')
        .forEach(el => el.classList.remove('active'));
    document.querySelectorAll(`.building-polygon[data-building-id="${buildingId}"]`)
        .forEach(el => el.classList.add('active')); // CSS animasi glow aktif

    // Gunakan shortDesc jika ada, jika tidak potong description 150 karakter
    let desc = data.shortDesc || data.description;
    if (!data.shortDesc && desc.length > 150) desc = desc.substring(0, 150) + "...";
    popoverDesc.textContent = desc;

    // Auto-load thumbnail (lihat Bagian 16)
    
    popoverCard.classList.add('visible');  // CSS: opacity 1 -> popover tampil

    // Hitung posisi agar popover tidak keluar dari tepi layar
    let posX = x + 15;
    let posY = y + 15;
    if (posX + 320 > window.innerWidth) posX = window.innerWidth - 320 - 15;
    if (posY + popoverCard.offsetHeight > window.innerHeight) posY = y - popoverCard.offsetHeight - 15;
    popoverCard.style.left = posX + 'px';
    popoverCard.style.top  = posY + 'px';
}
```

**Efek glow polygon saat aktif (style.css):**
```css
@keyframes polygonNyalaGlow {
    0%   { fill: rgba(251,191,36,0.45); stroke: #fbbf24; stroke-width: 8; }
    100% { fill: rgba(239,68,68,0.6);   stroke: #ef4444; stroke-width: 14; }
}
.building-polygon.active polygon { animation: polygonNyalaGlow 0.85s infinite alternate; }
```

**Cara menutup popover:**
- Klik tombol X (popoverClose) -> `closePopover()` — **app.js baris 835**
- Klik di luar popover — **app.js baris 836-840**:
```js
document.addEventListener('click', (e) => {
    if (!popoverCard.contains(e.target) && !e.target.closest('.building-polygon')) {
        closePopover();
    }
});
```

---

## 10. Fitur: Modal Detail Bangunan

**File:** `src/app.js` — **baris 843-1110**

Modal = panel overlay besar yang tampil setelah tombol "Lihat Detail" diklik.

**Tombol trigger (app.js baris 829-832):**
```js
btnDetail.addEventListener('click', () => {
    closePopover();                        // tutup popover dulu
    if (currentBuildingId) openModal(currentBuildingId);
});
```

**Fungsi openModal (app.js baris 843-1104) — isi konten:**
```js
function openModal(buildingId) {
    const data = buildingData[buildingId];

    // 1. Isi konten teks
    document.getElementById('modalNumber').textContent = data.number || buildingId;
    document.getElementById('modalName').textContent = data.name;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalDimensi').textContent = data.dimensi || '-';

    // 2. Zona badge — set warna sesuai zona A/B/C/D
    const zonaVal = data.zona || '-';
    zonaEl.textContent = 'Zona ' + zonaVal;
    zonaEl.className = 'zona-badge zona-' + zonaVal.toLowerCase(); // zona-a, zona-b, dll

    // 3. Daftar fungsi — buat <li> untuk setiap item di data.fungsi
    data.fungsi.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        fungsiEl.appendChild(li);
    });

    // 4. Galeri foto (lihat Bagian 11)
    
    // 5. Tampilkan modal
    modalOverlay.classList.add('active');
    // Fokus otomatis ke tombol tutup (aksesibilitas)
    setTimeout(() => document.getElementById('closeModal').focus(), 100); // baris 1103
}
```

**Warna zona badge (style.css):**
```css
.zona-a { background: rgba(239,68,68,0.15); color: #ef4444; }   /* Merah */
.zona-b { background: rgba(234,88,12,0.15); color: #ea580c; }   /* Oranye */
.zona-c { background: rgba(16,185,129,0.15); color: #10b981; }  /* Hijau */
.zona-d { background: rgba(99,102,241,0.15); color: #6366f1; }  /* Ungu */
```

**Cara menutup modal:**
- Klik tombol X -> `closeModal()` — **app.js baris 1112**
- Klik backdrop gelap di luar modal — **app.js baris 1114-1116**
- Tekan Escape — **app.js baris 1118-1120**

---

## 11. Fitur: Galeri Foto Multi-Lantai

**File:** `src/app.js` — **baris 877-1099**

Galeri otomatis mendeteksi foto dari folder `public/buildings/` tanpa perlu mendaftarkan foto secara manual.

### Konvensi Penamaan Folder

```
public/buildings/
├── b20(Area HRSG)/          <- folder utama: ID + (Nama Bangunan)
│   ├── thumb.jpg            <- thumbnail (muncul di popover)
│   ├── Lt Dasar/            <- sub-folder lantai (auto-terdeteksi)
│   │   ├── 1.jpg
│   │   └── 4(Turbine GT 1).jpg  <- nama dalam kurung = CAPTION foto
│   ├── Lt 1/
│   │   └── 10(Circuit Braker).jpg
│   └── Lt 2/
│       └── 14(Steam Turbine).jpg
```

### Logika Kategorisasi Foto (app.js baris 886-927)

```js
allImagePaths.forEach(path => {
    if (path.toLowerCase().startsWith(folderPathMatcher)) {
        
        // Pisahkan: apakah ini thumbnail?
        if (path.endsWith('/thumb.jpg')) {
            thumbPhoto = { url, title: 'Foto Utama / Thumbnail', ... };
            return; // skip, jangan masuk galeri biasa
        }
        
        // Ambil caption dari nama file: "4(Turbine GT 1).jpg" -> "Turbine GT 1"
        const match = fileName.match(/\((.*?)\)/);
        const title = match ? match[1] : '';
        
        // Tentukan: file di sub-folder (lantai) atau folder root?
        const pathParts = relativePath.split('/');
        if (pathParts.length > 1) {
            // Ada sub-folder -> masuk ke floorPhotos["Lt Dasar"]
            floorPhotos[pathParts[0]].push({ url, title, fileName });
        } else {
            // File di root -> masuk ke rootPhotos (Eksterior)
            rootPhotos.push({ url, title, fileName });
        }
    }
});
```

### Urutan Lantai (app.js baris 944-951)

"Lt Dasar" selalu paling atas, lalu Lt 1, Lt 2, dst:
```js
const floorNames = Object.keys(floorPhotos).sort((a, b) => {
    if (a.toLowerCase().includes('dasar')) return -1; // Dasar selalu pertama
    if (b.toLowerCase().includes('dasar')) return 1;
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    return numA - numB;
});
```

### Slider Gallery (app.js baris 1047-1095)

Setiap section (eksterior/lantai) punya slider horizontal independen:
```js
let currentIdx = 0;
const totalPhotos = section.photos.length;

function updateSlider() {
    track.style.transform = `translateX(-${currentIdx * 100}%)`; // geser track
    counter.textContent = `${currentIdx + 1} / ${totalPhotos}`;  // update "1 / 5"
    prevBtn.disabled = currentIdx === 0;
    nextBtn.disabled = currentIdx === totalPhotos - 1;
}

prevBtn.addEventListener('click', () => { if (currentIdx > 0) { currentIdx--; updateSlider(); } });
nextBtn.addEventListener('click', () => { if (currentIdx < totalPhotos-1) { currentIdx++; updateSlider(); } });
```

---

## 12. Fitur: Lightbox (Zoom Foto)

**File:** `src/app.js` — **baris 1122-1144**

Klik foto di galeri modal -> foto tampil fullscreen.

**HTML (index.html baris 1107-1112):**
```html
<div id="lightboxOverlay" class="lightbox-overlay">
    <button id="lightboxClose">x</button>
    <img id="lightboxImage" src="" alt="">
    <div id="lightboxCaption"></div>
</div>
```

**Event listener di setiap foto galeri (app.js baris 1021):**
```js
img.addEventListener('click', () => openLightbox(photo.url, photo.title || img.alt));
```

**Fungsi openLightbox (app.js baris 1128-1132):**
```js
function openLightbox(src, caption) {
    lightboxImage.src = src;
    lightboxCaption.textContent = caption || '';
    lightboxOverlay.classList.add('active'); // CSS: opacity 1 -> fullscreen tampil
}
```

**Cara menutup (app.js baris 1138-1144):** klik X, klik luar foto, atau tekan Escape.

---

## 13. Fitur: Daftar Bangunan (Panel di Peta)

**File:** `src/app.js` — **baris 1146-1194**

Panel "Daftar Bangunan" adalah daftar scrollable yang tertanam langsung di dalam SVG peta menggunakan `<foreignObject>`.

**HTML di dalam SVG (index.html baris 606-618):**
```html
<foreignObject x="6090" y="180" width="1900" height="2300" class="daftar-bangunan-fo">
    <div class="daftar-bangunan-wrapper">
        <div class="daftar-bangunan-header">Daftar Bangunan</div>
        <ul class="building-list" id="buildingList">
            <!-- Diisi JavaScript secara dinamis -->
        </ul>
    </div>
</foreignObject>
```

> `<foreignObject>` = fitur SVG yang memungkinkan konten HTML biasa tertanam di dalam SVG.
> Koordinat `x="6090" y="180"` = posisi panel di sudut kanan atas peta satelit.

**Cara JavaScript mengisi daftar (app.js baris 1152-1194):**
```js
// Ambil dua list: satu di SVG satelit, satu di SVG vektor
const buildingLists = [
    document.getElementById('buildingList'),       // SVG satelit
    document.getElementById('buildingListVektor')  // SVG vektor
].filter(Boolean);

// Urutkan bangunan: b1, b2, ..., b46
const sortedBuildings = Object.entries(buildingData).sort((a, b) => {
    const numA = parseInt(a[0].replace(/[^0-9]/g, '')) || 0;
    const numB = parseInt(b[0].replace(/[^0-9]/g, '')) || 0;
    return numA - numB;
});

// Buat <li> untuk setiap bangunan dan tambahkan ke daftar
sortedBuildings.forEach(([id, data]) => {
    buildingLists.forEach(listEl => {
        const li = document.createElement('li');
        li.className = 'building-item';
        li.innerHTML = `<div class="building-item-name">${data.name}</div>`;

        // Klik item -> cari polygon bangunan yang terlihat -> buka popover di tengahnya
        li.addEventListener('click', (e) => {
            e.stopPropagation();
            const polys = document.querySelectorAll(`.building-polygon[data-building-id="${id}"]`);
            let targetRect = null;
            for (let poly of polys) {
                const rect = poly.getBoundingClientRect();
                if (rect.width > 0 && rect.height > 0) { // polygon sedang terlihat
                    targetRect = rect;
                    break;
                }
            }
            if (targetRect) {
                openPopover(id, targetRect.left + targetRect.width/2, targetRect.top + targetRect.height/2);
            } else {
                openPopover(id, window.innerWidth/2, window.innerHeight/2); // fallback
            }
        });
        listEl.appendChild(li);
    });
});
```

---

## 14. Fitur: Side Navbar Drawer

**File:** `src/app.js` — **baris 1196-1266**

Sidebar navigasi yang slide dari kiri saat tombol hamburger diklik. Berisi link ke website/portal lain.

**HTML trigger (index.html baris 22-30):**
```html
<button id="sidebarToggleBtn" class="sidebar-toggle-btn">
    <!-- ikon hamburger tiga garis -->
</button>
```

**HTML sidebar (index.html baris 43-45):**
```html
<div class="side-navbar-backdrop" id="sideNavbarBackdrop"></div>
<aside class="side-navbar" id="sideNavbar" aria-hidden="true">
    ...
</aside>
```

**Logika buka/tutup (app.js baris 1203-1231):**
```js
function openSidebar() {
    sideNavbar.classList.add('active');         // CSS: transform ke posisi visible
    sideNavbarBackdrop.classList.add('active'); // CSS: backdrop gelap tampil
    sideNavbar.setAttribute('aria-hidden', 'false');
}

function closeSidebar() {
    sideNavbar.classList.remove('active');
    sideNavbarBackdrop.classList.remove('active');
    sideNavbar.setAttribute('aria-hidden', 'true');
}

// Tombol hamburger toggle
sidebarToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (sideNavbar.classList.contains('active')) {
        closeSidebar();
    } else {
        openSidebar();
    }
});

sideNavbarClose.addEventListener('click', closeSidebar);    // tombol X dalam sidebar
sideNavbarBackdrop.addEventListener('click', closeSidebar); // klik backdrop
// Tekan Escape -> closeSidebar() — baris 1232-1236
```

**Animasi CSS (style.css):**
```css
.side-navbar {
    transform: translate(-100%);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.side-navbar.active { transform: translate(0); }
```

**Handler link external yang belum ada URL-nya (app.js baris 1251-1265):**
```js
externalNavBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const targetUrl = btn.getAttribute('href');
        if (!targetUrl || targetUrl === '#' || targetUrl === '') {
            e.preventDefault();
            alert('Tautan ... akan segera dipasang/disinkronkan.'); // placeholder
        } else {
            closeSidebar(); // tutup sidebar, buka URL
        }
    });
});
```

---

## 15. Fitur: Jam Digital WIB

**File:** `src/app.js` — **baris 618-634**

**HTML (index.html baris 37-40):**
```html
<div id="digitalClock" class="digital-clock">
    <span id="clockTime">00:00</span>
    <span class="clock-label">WIB</span>
</div>
```

**Cara kerja (app.js baris 621-633):**
```js
function updateClock() {
    const now = new Date();
    const options = {
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta' // selalu WIB, tidak peduli timezone browser user
    };
    clockTimeEl.textContent = now.toLocaleTimeString('id-ID', options);
}

updateClock();                   // jalankan sekali langsung saat load
setInterval(updateClock, 1000);  // perbarui setiap 1000ms (1 detik)
```

---

## 16. Sistem Auto-Load Gambar

**File:** `src/app.js` — **baris 613-614**

Ini adalah fitur kunci yang membuat penambahan foto tidak perlu mengubah kode.

```js
const allImageFiles = import.meta.glob('../public/buildings/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}');
const allImagePaths = Object.keys(allImageFiles); // array semua path gambar
```

`import.meta.glob` adalah fitur Vite — saat build, Vite memindai semua file yang cocok pola glob dan mendaftarkannya otomatis.

**Untuk menambah foto bangunan baru:**
1. Buat folder `public/buildings/bXX(Nama Bangunan)/`
2. Taruh foto (`thumb.jpg`, `1.jpg`, `2.jpg`, dst)
3. Jalankan ulang dev server atau build -> foto langsung terdeteksi tanpa ubah kode

### Cara mencocokkan foto ke bangunan (app.js baris 773-798)

```js
// Susun nama folder: buildingId + (nama bangunan)
const folderName = buildingId + '(' + data.name.replace(/[\/\\:*?"<>|]/g, '-') + ')';
const folderPathMatcher = `../public/buildings/${folderName}/`.toLowerCase();

// Cari thumbnail
let thumbPath = allImagePaths.find(path => {
    const lowerPath = path.toLowerCase();
    const isInsideFolder = lowerPath.startsWith(folderPathMatcher);
    const isThumb = lowerPath.endsWith('/thumb.jpg') || lowerPath.endsWith('/thumb.jpeg');
    return isInsideFolder && isThumb;
});
```

---

## 17. Mapper Tool

**File:** `mapper.html`, `src/mapper.js`

Alat developer untuk menggambar/mengedit koordinat polygon bangunan. Tidak dapat diakses pengguna akhir — hanya untuk developer.

**Cara kerja:**
1. Tampilkan gambar peta sebagai latar
2. Developer klik-klik di peta untuk membuat titik polygon
3. Mapper generate kode SVG `<polygon points="...">` yang di-copy ke `index.html`
4. Data tersimpan di `localStorage` browser (tidak hilang saat refresh)

**`src/mapper.js` baris 7-14** — mengimpor buildingData dan icon:
```js
import { buildingData } from './app.js';
window.buildingData = buildingData; // expose ke global scope mapper.html

// Auto-discover icon yang ada di folder /png
const iconFilesGlob = import.meta.glob('../public/png/*.{png,jpg,jpeg,svg,webp}');
window.availableIcons = Object.keys(iconFilesGlob).map(path => path.split('/').pop()).sort();
```

---

## 18. Styling & Tema Gelap

**File:** `src/style.css` (1373 baris)

| Baris | Section |
|---|---|
| 1-31 | CSS Variables (warna, font, radius, shadow, transition) |
| 33-44 | Dark theme override (`body.dark-mode`) |
| 46-55 | Reset & base body |
| 57-63 | Page layout (flexbox column) |
| 65-95 | Top bar |
| 401-520 | Building polygon & animasi glow |
| 521-600 | Tooltip |
| 601-670 | Popover card |
| 671-800 | Modal overlay & content |
| 801-985 | Gallery (slider, arrows, dots, lightbox) |
| 985-1057 | Daftar Bangunan panel |
| 1058-1230 | Side navbar |

**Tema gelap aktif by default** (`<body class="dark-mode">`):
```css
/* Light (default dalam :root) */
:root {
    --bg-primary: #f0f2f5;
    --text-primary: #1a1a2e;
    --accent: #0066cc;
}
/* Dark (override saat body punya class dark-mode) */
body.dark-mode {
    --bg-primary: #111827;
    --text-primary: #f1f5f9;
    --accent: #60a5fa;
}
```

---

## 19. Aksesibilitas Keyboard

**File:** `src/app.js` — **baris 741-750**

Setiap polygon bangunan bisa diakses dengan keyboard:
```js
building.setAttribute('tabindex', '0');    // bisa di-Tab
building.setAttribute('role', 'button');   // screen reader: ini tombol

building.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        // Buka popover di tengah layar (tidak ada posisi kursor untuk keyboard)
        openPopover(this.getAttribute('data-building-id'),
            window.innerWidth/2, window.innerHeight/2);
    }
});
```

Modal ditutup dengan Escape **(baris 1118-1120)** dan fokus otomatis dipindah ke tombol tutup setelah dibuka **(baris 1103)**:
```js
setTimeout(() => document.getElementById('closeModal').focus(), 100);
```

---

## 20. Diagram Alur Interaksi Pengguna

```
Pengguna membuka index.html
|
+- Browser load src/main.js (index.html baris 1114)
|   +- import style.css
|   +- import app.js
|       +- Definisi buildingData (baris 6-606)
|       +- import.meta.glob -> allImagePaths (baris 613-614)
|       +- DOMContentLoaded event listener terpasang (baris 616)
|
Saat halaman selesai dimuat (DOMContentLoaded):
+- Jam digital mulai berjalan (baris 618-634)
+- Toggle Satelit/Vektor dikonfigurasi (baris 636-688)
+- Event listener dipasang ke SEMUA .building-polygon (baris 713-751)
+- Panel Daftar Bangunan diisi secara dinamis (baris 1146-1194)
+- Side navbar dikonfigurasi (baris 1196-1266)

Pengguna hover di atas bangunan:
+- mouseenter -> tooltip tampil (baris 724-730)
+- mousemove  -> tooltip ikuti kursor (baris 732-735)
+- mouseleave -> tooltip hilang (baris 737-739)

Pengguna klik bangunan:
+- click -> openPopover(buildingId, x, y) (baris 716-721)
   +- Isi nama + deskripsi singkat di popover card
   +- Polygon bangunan glow/nyala (animasi CSS)
   +- Auto-load thumbnail dari allImagePaths
   +- Posisikan popover agar tidak keluar layar

Pengguna klik "Lihat Detail" di popover:
+- closePopover() -> openModal(buildingId) (baris 829-832)
   +- Isi semua data: nama, deskripsi, dimensi, zona, fungsi
   +- Build galeri foto multi-lantai dari allImagePaths (baris 877-1099)

Pengguna klik foto di galeri:
+- openLightbox(url, caption) -> foto tampil fullscreen (baris 1128-1132)

Pengguna klik nama bangunan di panel "Daftar Bangunan":
+- Cari polygon bangunan yang sedang terlihat
+- openPopover(id, x_tengah_polygon, y_tengah_polygon) (baris 1168-1189)

Pengguna klik tombol hamburger:
+- openSidebar() / closeSidebar() (baris 1219-1228)
```

---

## 21. Ringkasan Fungsi & Lokasi Kode

| Fungsi | File | Baris |
|---|---|---|
| Data semua bangunan (buildingData) | `src/app.js` | 1-606 |
| Registrasi semua gambar (glob) | `src/app.js` | 613-614 |
| Jam digital WIB | `src/app.js` | 618-634 |
| Toggle Satelit vs Vektor | `src/app.js` | 636-688 |
| Pasang event ke semua polygon | `src/app.js` | 713-751 |
| Buka popover (klik bangunan) | `src/app.js` | 754-821 |
| Tutup popover | `src/app.js` | 823-840 |
| Buka modal detail | `src/app.js` | 843-1104 |
| Tutup modal | `src/app.js` | 1107-1120 |
| Galeri foto + slider per lantai | `src/app.js` | 877-1099 |
| Lightbox (zoom foto) | `src/app.js` | 1122-1144 |
| Isi panel Daftar Bangunan | `src/app.js` | 1146-1194 |
| Side navbar drawer | `src/app.js` | 1196-1266 |
| Polygon SVG satelit (46 bangunan) | `index.html` | 163-560 |
| Panel Daftar Bangunan HTML (foreignObject) | `index.html` | 606-618 |
| Polygon SVG vektor | `index.html` | 622-1037 |
| Modal HTML | `index.html` | 1038-1105 |
| Lightbox HTML | `index.html` | 1107-1112 |
| Semua styling CSS | `src/style.css` | 1-1373 |
| Konfigurasi Vite (multi-page, port) | `vite.config.js` | 1-21 |
| Entry point halaman utama | `src/main.js` | 1-10 |
| Entry point mapper tool | `src/mapper.js` | 1-36 |

---

*Dokumen ini dibuat berdasarkan analisis kode sumber proyek Denah Interaktif PLTGU Cilegon — 30 Juli 2026.*
