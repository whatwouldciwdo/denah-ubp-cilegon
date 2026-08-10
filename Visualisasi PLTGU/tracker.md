# 🐳 Docker Deployment & Conversion Tracker
**Proyek:** Denah Interaktif PLTGU Cilegon (`Visualisasi PLTGU`)  
**Target Server:** Ubuntu Server (CLI / Headless / Cloud / On-Premise)  
**Arsitektur:** Multi-stage Docker Container (Node.js Build ➔ Nginx Alpine Production)

---

## 📋 Checklist Status Konversi & Persiapan (Local / Repo)

- [x] **1. Pembuatan `.dockerignore`**  
  Mengabaikan folder `node_modules`, `dist`, `.git`, dan file sementara agar proses *build image* jauh lebih cepat dan ringan (ukuran context kecil).
- [x] **2. Pembuatan Konfigurasi Server `nginx.conf`**  
  Mengonfigurasi Nginx untuk menangani routing Multi-Page Application (`index.html` dan `mapper.html`), mengaktifkan kompresi `gzip`, dan menambah *caching header* untuk aset gambar/SVG agar performa sangat cepat.
- [x] **3. Pembuatan Multi-Stage `Dockerfile`**  
  - **Stage 1 (`builder`)**: Menggunakan `node:20-alpine` untuk menjalankan `npm ci` dan `npm run build` dari source code Vite.
  - **Stage 2 (`runner`)**: Menggunakan `nginx:1.27-alpine` ringan (~15 MB) untuk menyajikan folder `dist/` secara statis di Port `80`.
- [x] **4. Pembuatan `docker-compose.yml`**  
  Menyediakan cara instan untuk *build* dan *deploy* container di Ubuntu cukup dengan satu perintah CLI (`docker compose up -d`), lengkap dengan `healthcheck` dan otomatisasi `restart: always`.
- [ ] **5. Push Kode ke Git Repository (GitHub / GitLab)**  
  Memastikan semua file (`Dockerfile`, `docker-compose.yml`, `.dockerignore`, `nginx.conf`) telah di-*commit* dan di-*push* ke branch utama (misal: `main`).

---

## 🚀 Panduan Eksekusi di Server Ubuntu CLI

Berikut adalah langkah-langkah lengkap (*step-by-step*) dari awal sampai container berjalan di server Ubuntu:

### Langkah 1: Persiapan Server Ubuntu (Install Docker & Git)
Buka terminal SSH ke server Ubuntu kamu, lalu jalankan perintah berikut jika Docker belum terpasang:
```bash
# Update paket system
sudo apt update && sudo apt upgrade -y

# Install Git & curl
sudo apt install -y git curl ca-certificates

# Install Docker Engine & Docker Compose terbaru via script resmi Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Masukkan user saat ini ke dalam grup docker agar bisa menjalankan docker tanpa sudo
sudo usermod -aG docker $USER
newgrp docker

# Verifikasi instalasi
docker --version
docker compose version
```

---

### Langkah 2: Pull Kode dari Git Repository (`clone` / `pull`)
Di server Ubuntu CLI, tarik source code dari repository tempat kamu menyimpan proyek ini:
```bash
# Masuk ke direktori kerja web / direktori pilihanmu
mkdir -p ~/apps && cd ~/apps

# Clone repository (Jika belum pernah clone)
git clone https://github.com/Rayfalmayvandra/Denah-Interaktif-PLTGU-Cilegon.git

# Masuk ke direktori proyek Visualisasi PLTGU
cd Denah-Interaktif-PLTGU-Cilegon/"Visualisasi PLTGU"

# (Jika repository sudah ada sebelumnya dan ingin update ke kode terbaru)
git pull origin main
```

---

### Langkah 3: Build & Running via Docker Container
Setelah masuk ke folder `Visualisasi PLTGU` (tempat file `Dockerfile` dan `docker-compose.yml` berada), jalankan perintah berikut:

#### Opsi A: Menggunakan Docker Compose (Sangat Direkomendasikan)
```bash
# Build image sekaligus jalankan container di *background* (detached mode)
docker compose up -d --build
```
> **Catatan Port:**  
> Secara default, aplikasi akan berjalan di Port **80** (`http://ip-server-ubuntu`). Jika Port 80 di servermu sudah dipakai oleh service lain (misal Apache/Web server lain), buka file `docker-compose.yml` lalu ubah bagian `ports:` menjadi `- "8080:80"` (sehingga bisa diakses di `http://ip-server-ubuntu:8080`).

#### Opsi B: Menggunakan perintah Docker biasa (Jika tanpa Docker Compose)
```bash
# 1. Build Docker Image
docker build -t visualisasi-pltgu:latest .

# 2. Run Docker Container
docker run -d \
  --name denah-pltgu-container \
  --restart always \
  -p 80:80 \
  visualisasi-pltgu:latest
```

---

### Langkah 4: Verifikasi & Monitoring Container di Ubuntu CLI

Gunakan perintah-perintah berikut untuk mengecek status aplikasi yang berjalan:

```bash
# 1. Cek apakah container sudah status "Up" (dan Healthcheck "healthy")
docker ps

# 2. Lihat log output / error dari Nginx dalam container real-time
docker logs -f denah-pltgu-container

# 3. Cek penggunaan resource RAM & CPU container
docker stats denah-pltgu-container

# 4. Uji koneksi secara lokal di CLI Ubuntu (harus mengembalikan HTML aplikasi)
curl -I http://localhost:80
```

---

## 🔄 Cara Update Kode di Masa Depan (Continuous / Manual Deployment)

Jika sewaktu-waktu kamu memperbarui icon, kode `index.html`, atau `app.js` di laptop lokal dan sudah melakukan `git push`, cara memperbaruinya di server Ubuntu CLI sangat sederhana:

```bash
# 1. Masuk ke direktori proyek di server
cd ~/apps/Denah-Interaktif-PLTGU-Cilegon/"Visualisasi PLTGU"

# 2. Tarik update terbaru dari Git
git pull origin main

# 3. Rebuild dan restart container secara otomatis (tampa downtime lama)
docker compose up -d --build --force-recreate
```

---

## 🛠️ Pemecahan Masalah (*Troubleshooting*)

1. **Port `80` Already in Use (Conflict)**
   - **Gejala:** Muncul error `Bind for 0.0.0.0:80 failed: port is already allocated`.
   - **Solusi:** Ubah `docker-compose.yml` pada bagian `ports:` dari `- "80:80"` menjadi `- "8080:80"` atau port bebas lainnya.

2. **Error `Permission Denied` saat menjalankan perintah docker**
   - **Solusi:** Jalankan `sudo usermod -aG docker $USER` lalu `newgrp docker` atau *logout/login* ulang sesi SSH Ubuntu kamu.

3. **Ingin masuk ke dalam container yang sedang berjalan (Debugging shell)**
   - **Perintah:**
     ```bash
     docker exec -it denah-pltgu-container sh
     ```
